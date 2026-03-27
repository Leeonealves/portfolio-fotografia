import express from "express";
import upload from "../middleware/upload.middleware.js";
import Photo from "../models/Photo.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "photos",
    });

    const photo = await Photo.create({
      url: result.secure_url,
      public_id: result.public_id,
    });

    res.status(201).json({
      message: "Photo uploaded",
      photo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed" });
  }
});

export default router;
