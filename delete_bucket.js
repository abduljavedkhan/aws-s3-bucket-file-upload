// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

// Set the region 
AWS.config.update({region: ''});

// Enter access id and secret here
const ACCESS_ID = '';
const SECRET = '';

// Initializing S3 Interface
const s3 = new AWS.S3({
    accessKeyId: ACCESS_ID,
    secretAccessKey: SECRET
});

// Create params for S3.deleteBucket
var bucketParams = {
  Bucket : 'BUCKET_NAME'
};

// Call S3 to delete the bucket
s3.deleteBucket(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});