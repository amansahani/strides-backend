import { prisma } from "../db/index.js";
import S3 from "aws-sdk/clients/s3.js";
import multer from "multer";

const s3 = new S3({
  endpoint: process.env.S3endPoint,
  signatureVersion: "v4",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const upload = multer({
  storage: multer.memoryStorage(), // Use memory storage since we'll upload to S3 directly from memory
});

export const createDocument = async (req, res) => {
  try {
    const personalDetailsId = Number.parseInt(req.cookies.personalDetailsId);
    console.log("First", personalDetailsId, req.cookies);

    // Create a local variable to capture the correct personalDetailsId
    let capturedId = personalDetailsId;

    // Define a custom function to handle the file upload
    const handleFileUpload = async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "File upload failed" });
      }

      const { originalname, mimetype, buffer } = req.file;
      const key = `${Date.now().toString()}-userId${originalname}`;

      const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: mimetype,
      };

      const request = s3.putObject(params);

      try {
        await request.promise(); // Wait for S3 upload to complete
      } catch (error) {
        console.error("S3 Upload Error:", error);
        return res.status(500).json({ error: "S3 upload failed" });
      }

      const document = await prisma.document.create({
        data: {
          name: originalname,
          contentType: mimetype,
          dataURL: `https://ipfs.filebase.io/ipfs/${params.Key}`,
          personalDetails: { connect: { id: capturedId } },
        },
      });

      return res.status(201).json(document);
    };

    // Invoke the `upload` middleware to handle the file upload
    return upload.single("file")(req, res, handleFileUpload);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getDocuments = async (req, res) => {
  try {
    const personalDetailsId = req.cookies.personalDetailsId;

    const documents = await prisma.document.findMany({
      where: { personalDetailsId: parseInt(personalDetailsId) },
    });

    return res.status(200).json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
