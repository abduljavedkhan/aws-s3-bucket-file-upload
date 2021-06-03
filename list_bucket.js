// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: ''});

// Enter copied or downloaded access id and secret here
const ACCESS_ID = '';
const SECRET = '';

// Initializing S3 Interface
const s3 = new AWS.S3({
    accessKeyId: ACCESS_ID,
    secretAccessKey: SECRET
});

// Call S3 to list the buckets
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});

//  -------Output
/*
Success [ { 
	Name: 'test_bucket',
    CreationDate: 2020-09-02T13:49:44.000Z
	} ]
*/