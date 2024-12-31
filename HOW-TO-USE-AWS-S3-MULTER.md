# AWS S3 Multer Integration

## Overview

This project demonstrates how to integrate AWS S3 with an Express application using Multer. We will create an API that allows users to upload files to an S3 bucket and retrieve them. This is a common use case for applications that require file storage and retrieval.
Prerequisites

## Before you begin, ensure you have the following:
- An active AWS account. [AWS Console](https://aws.amazon.com/)
- `Node.js` and `npm` installed
- Make sure to install `express` as well.
- Basic knowledge of Express and Multer

## Setup Instructions in AWS

1. Set Up AWS S3 Bucket
    - Log in to your AWS account and navigate to S3.
    - Create a new S3 bucket and configure it for public access.
    - Make note of your S3 bucket name, as you will need it later.


2. Configure AWS User and Permissions
    - In the AWS Management Console, create an IAM user with programmatic access.
    - Attach the `AmazonS3FullAccess` policy to the user. (For production, create a more restrictive policy.)
    - Save the access key ID and secret access key provided for the user.

3. Set Up AWS S3 Bucket Permissions
    - Create a bucket policy to allow your user to access the bucket. Replace `ACCOUNT_ID` and `USER_NAME` with your AWS account ID and IAM user name.
    - You can get to this in the `permissions` tab in your bucket dashboard. Scroll down to `bucket policy` and click `edit policy`.
    - Example policy to attach to your S3 bucket:
    ```json
    {
    "Version": "2012-10-17",
    "Statement": [
        {
        "Sid": "AllowIAMUserAccess",
        "Effect": "Allow",
        "Principal": {
            "AWS": "arn:aws:iam::ACCOUNT_ID:user/USER_NAME"
        },
        "Action": "s3:*",
        "Resource": [
            "arn:aws:s3:::YOUR_BUCKET_NAME",
            "arn:aws:s3:::YOUR_BUCKET_NAME/*"
        ]
        }
    ]
    }


## Set up in Project(VSCode)

1. Install Required Packages
    - This project uses the following packages:
        * Multer: Middleware for handling multipart/form-data (used for file uploads).
        * Multer-S3: A Multer storage engine for AWS S3.
        * AWS SDK: The official AWS SDK for JavaScript (v3).

    - To install the required packages, run the following command:
        ```bash
        npm install multer multer-s3 @aws-sdk/client-s3
    - NOTE: Make sure you install `dotenv`, `express` and `Node.js`:
        ```bash
        npm install -y init
        npm install express
        npm install dotenv

2. Configure Environment Variables
    - Create a `.env` file in the root of your project and add the following variables. NOTE: Replace the values with your own:
    ```js
    AWS_REGION=us-east-2
    AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
    AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
    AWS_S3_BUCKET=YOUR_BUCKET_NAME
3. Make sure you have `node_modules` and `.env` included inside a `.gitignore` file, so the environment variables and node files are not pushed to your repository on Github. 

## Configure Multer to Upload Files to S3
- In your `server.js` or main server file, set up Multer to use S3 for file uploads.
1. Import all necessary packages:
    ```js
    const multer = require('multer');
    const multerS3 = require('multer-s3');
    const { S3Client } = require('@aws-sdk/client-s3');
    const express = require("express");
    const app = express();
    require('dotenv').config();
2. Set up to start server:
    ```js
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
3. Initialize S3 Client:
    ```js
    const s3 = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });
4. Configure multer to use S3
    ```js
    const upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: process.env.AWS_S3_BUCKET,
            key: (req, file, cb) => {
            cb(null, `${Date.now().toString()}-${file.originalname}`);
            },
        }),
    });
5. Create `post` route to upload file to AWS S3 Bucket:
    ```js
    app.post('/upload', upload.single('image'), (req, res) => {
        if (req.file) {
            return res.status(200).json({
                message: 'File uploaded successfully',
                fileUrl: req.file.location,
            });
        }
        return res.status(400).json({ message: 'File upload failed' });
    });

## Test the File Upload API
- You can now test the file upload by sending a `POST` request with a file to the `/upload` endpoint. You should receive the file URL as a response. Testing in Postman:
    ![upload](<img/S3-Multer/uploadFile.png>)
    - Confirm that the file is uploaded to AWS S3 Bucket:
    ![aws s3 bucket](<img/S3-Multer/fileUploadedToS3Bucket.png>)

## Conclusion

In this lesson, we successfully integrated `AWS S3` with an `Express` application using `Multer`. We created an API to upload files to an `S3 bucket` and retrieve them, enabling efficient file storage for applications. This setup is ideal for applications that require file uploads, such as image galleries, document storage, or user-uploaded content.