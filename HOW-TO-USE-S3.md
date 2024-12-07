# AWS S3 - Create an S3 Bucket 

## Objectives

* Create an S3 bucket on AWS.
* Configure permissions to make a S3 bucket public.
* Upload an image to the bucket and make is accessible via HTTPS.

**Public URL:** <https://my-first-bucket-42.s3.us-east-2.amazonaws.com/Penelope.jpg>

**Public URL:** <https://my-first-bucket-42.s3.us-east-2.amazonaws.com/annaFairy1.jpeg>
## Setup Guide

### Step 1 - Create a S3 Bucket

1. Sign in to AWS Console. <https://aws.amazon.com/console/>
2. Navigate to S3 Service: In the search bar, type S3 and select Amazon S3 from the list of services.
    * NOTE: After sign-in, if you have navigated to `S3` before it will show up in your console:
    ![S3](</img/S3/S3.png>)
3. Create a New Bucket by clicking `Create bucket`.
    ![create bucket](</img/S3/createBucket.png>)
    * Enter a unique name for your bucket. It will have a red message under the input field if your name has already in use.
    ![bucket name](</img/S3/bucketName2.png>)
    * For now we will only enter a name, scroll down to the bottom and click the yellow `create bucket` button.
    * After clicking `create bucket`, you will be directed back to your buckets console:
    ![buckets](</img/S3/buckets.png>)

### Step 2 - Configure Bucket Permissions

1. Click on your new bucket.
    * You be directed to the buckets page:
    ![bucket page](</img/S3/bucketPage.png>)
2. To enable permissions navigate to the permissions tab on the bucket page. 
    ![permissions tab](</img/S3/permissionsTab.png>)
3. You will be directed to the permissions page, from there click `edit` in the Block Public Access section:
    ![edit permissions](</img/S3/editPermissions.png>)
    * Click on the check box to uncheck the checkboxes. 
    * After enabling access it should look like this:
    ![enable access](</img/S3/blockPublicAccess.png>)

4. Add a Bucket Policy Using the Console:
    * Below the `Block Public Access` section, is the `Bucket Policy` section. Click `edit` on this section. 
    * A Edit box and a `policy generator` button will appear. Click on `policy generator`.
    ![policy generator btn](</img/S3/policyGeneratorBtn.png>)
    * You will be redirected to a new page:
        - Select Policy Type: Choose `S3 Bucket Policy`.
        - Principal: Enter `*` to allow access from any user.
        - Actions: Select `GetObject` from the dropdown list.
        - ARN: Enter the bucket ARN in the format:          arn:aws:s3:::my-website-images-123/* (replace my-website-images-123 with your bucket name).
            * Note: The ARN is the Amazon Resource Number of your S3 bucket.
            * You can copy and paste the ARN from the Properties tab of the S3 bucket. 
            ![ARN](</img/S3/ARN.png>)
            * Be sure to add a `/*` to the end to indicate a wildcard.
        ![policy generator](</img/S3/policyGenerator.png>)
        - Click Add Statement, then Generate Policy.
        - Copy the generated policy into the Bucket policy editor.
        ![bucket policy](</img/S3/bucketPolicy.png>)

5. Click on `save changes` at the bottom of the page. 

### Step 3 - Upload an Image
* Upload an Image File:
    - Go to the Objects tab and click Upload.
    ![upload image](</img/S3/uploadImage.png>)
    - Click `Add files`.
    ![add files](</img/S3/addFiles.png>)
    - Select the file you want to upload from your file explorer.
    - Click `Upload`.

### Step 4: Make the Image Available via HTTPS
* Once the image is uploaded, click on the file name to open its details.
![image click](</img/S3/imageClick.png>)
* You will be directed to the `Object Overview`. This is where you will find the `URL` link to your newly uploaded image.
![image URL](</img/S3/imageUrl.png>)
* Copy the URL.
* Test the Image URL:
    - Open a new browser tab and paste the URL.
    - You should see the image load. This means it is publicly accessible and available via HTTPS.

## Concepts
**S3 Buckets:** is a container for storing data like files or images in the cloud.

**S3 Objects:** are the basic units of data that are stored in an S3 Bucket. They can be files, images or any other types of data. 

**Bucket Policy:** is a JSON based document that defines the access control rules for an S3 Bucket.

**Private vs Public Buckets:** S3 Buckets can be either private or public. Private buckets are only accessible by authorized users, while public buckets are accessible by anyone. 

**Amazon Resource Name(ARN):** is a unique identifier for an AWS resource. The structure of an ARN is designed to provide a uniform way to identify resources across all AWS services. 

**Wildcard (*):** In file systems or shell commands, `*` matches any number of characters in a file or directory name.
