const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const path = require('path');
const express = require("express");
const app = express();
require('dotenv').config();


// Initialize S3 client
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Configure multer to use S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    key: (req, file, cb) => {
      cb(null, `${Date.now().toString()}-${file.originalname}`);
    },
  }),
});

// app.post('/upload', upload.single('file'), (req, res) => {
//     const imageUrl = req.file ? req.file.location : '';
//     res.status(200).json({ message: 'File uploaded successfully', imageUrl });
//   });
// Upload file to S3
// app.post('/upload', upload, (req, res) => {
//     //const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
//     const imageUrl = req.file ? req.file.location : '';
// });


// Upload Endpoint
app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
      return res.status(200).json({
        message: 'File uploaded successfully',
        fileUrl: req.file.location,
      });
    }
    return res.status(400).json({ message: 'File upload failed' });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
