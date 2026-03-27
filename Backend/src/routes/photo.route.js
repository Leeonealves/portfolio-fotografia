import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import Photo from "../models/photo.model.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "portfolio_fotografia",
  },
});

const upload = multer({ storage });

// Upload de uma foto
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const photo = await Photo.create({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.file.path, // URL do Cloudinary
    });

    res.json(photo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Buscar todas as fotos
router.get("/", async (req, res) => {
  const photos = await Photo.find().sort({ createdAt: -1 });
  res.json(photos);
});

export default router;
