const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const AWS = require('aws-sdk');
const endpoint = "https://s3.us-east-2.amazonaws.com/";

// Enter access id and secret here
const ACCESS_ID = '';
const SECRET = '';

// Enter the name of the bucket that you have created in https://s3.console.aws.amazon.com/s3/home
const BUCKET_NAME = 'test_bucket';

// Initialize S3 Interface
const s3 = new AWS.S3({
    accessKeyId: ACCESS_ID,
    secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
    // read content from the file
    const fileContent = fs.readFileSync(fileName);
	let file_url="";

	// timestamp
	const ts = Date.now();
	
    // file name you want to save as
	const filename = uuidv4()+'_'+ ts +'.jpeg';
    
	// setting up s3 upload params
    const params = {
        Bucket: BUCKET_NAME,
        Key: filename,
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err
        }
		file_url = endpoint+ BUCKET_NAME + '/'+ filename;
		console.log('file url '+ file_url)
        console.log(`File uploaded successfully. ${data.Location}`)
    });
};

// Enter the file you want to upload here
uploadFile('Test_image.jpg');



/*
output


uploaded url
file url https://s3.us-east-2.amazonaws.com/twototangodev/29fa36b5-cf79-448e-8f95-e94e1595039a_1622706074120.jpeg
File uploaded successfully. https://twototangodev.s3.amazonaws.com/Admin/subscription/29fa36b5-cf79-448e-8f95-e94e1595039a_1622706074120.jpeg
*/