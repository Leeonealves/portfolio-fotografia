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
    // Adicione as transformações aqui:
    transformation: [
      { fetch_format: "auto", quality: "auto" }, // Converte para WebP/AVIF e otimiza peso
      { width: 1920, crop: "limit" } // Opcional: Garante que fotos gigantes sejam redimensionadas
    ],
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

// Apagar uma foto por ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Procurar a foto na base de dados para obter o ID do Cloudinary (opcional, mas recomendado)
    const photo = await Photo.findById(id);

    if (!photo) {
      return res.status(404).json({ message: "Foto não encontrada no sistema." });
    }

    // 2. Remover da base de dados (MongoDB)
    await Photo.findByIdAndDelete(id);

    res.json({ message: "Foto removida com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao tentar apagar a foto." });
  }
});

export default router;
