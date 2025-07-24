// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const filePath = require("path");
const _ = require("lodash");
const { successResponse } = require("../helpers/response.helper");
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dmvc40kyp",
  api_key: "753129661365923",
  api_secret: "6ElCTLSl3stnTo1C6wPomXIMtJU",
  secure: true
});

const UploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, error: "No file uploaded" });
  }

  // Upload from memory buffer instead of file path
  cloudinary.uploader.upload_stream(
    {
      folder: "Subham",
      public_id: `${Date.now()}`,
      resource_type: "auto",
       format: "webp", 
      quality: "auto", 
      fetch_format: "auto", 
    },
    (err, result) => {
      if (err) {
        console.error("Cloudinary upload error:", err);
        return res.status(500).json({ 
          success: false, 
          error: "Image upload failed" 
        });
      }

      res.status(200).json({
        success: true,
        message: "Uploaded!",
        data: {
          url: result.secure_url,
          public_id: result.public_id,
          format: result.format,
          width: result.width,
          height: result.height,
        },
      });
    }
  ).end(req.file.buffer); // Send the buffer to Cloudinary
};

module.exports = { UploadImage };