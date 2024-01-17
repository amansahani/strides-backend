import S3 from "aws-sdk/clients/s3.js";
import * as fs from "fs";

const s3 = new S3({
  endpoint: "https://s3.filebase.com",
  signatureVersion: "v4",
  accessKeyId: "9B21087F56BBD890265B",
  secretAccessKey: "MIC6teKZ4LDak0FZLKjMXt11tWt4GQ7D800mKsSV",
});

const fileName = "schema.prisma";
const filePath =
  "/home/tomi/Desktop/strides/stride-backend/prisma/schema.prisma";
const bucketName = "testaman";

const file = fs.readFileSync(filePath);

function Upload(bucket, name) {
  var params = {
    Bucket: bucket,
    Key: name,
    ContentType: "text/plain",
    Body: file,
  };
  s3.putObject(params, function (error, data) {
    if (error) {
      console.error(error);
    } else {
      console.log("Successfully uploaded file" + name + ":" + bucket);
    }
  });
}
Upload(bucketName, fileName);
