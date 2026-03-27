import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import Photo from "../models/photo.model.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

console.log("Loaded .env from:", path.resolve(__dirname, "../../.env"));
console.log("DATABASE_URL_NO_SRV =", process.env.DATABASE_URL_NO_SRV);

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Conectar ao MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL_NO_SRV);
    console.log("MongoDB conectado!");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
    process.exit(1);
  }
}

async function importImages() {
  await connectDB();
  console.log("Iniciando script de importação...");

  try {
    console.log("Buscando imagens no Cloudinary...");

    // Buscar todas as imagens da pasta "portfolio_fotografia"
    const result = await cloudinary.search
      .expression("folder:portfolio_fotografia")
      .max_results(500)
      .execute();

    const images = result.resources;

    console.log(`Encontradas ${images.length} imagens.`);

    for (const img of images) {
      const exists = await Photo.findOne({ imageUrl: img.secure_url });

      if (exists) {
        console.log(`Já existe no banco: ${img.secure_url}`);
        continue;
      }

      await Photo.create({
        title: img.public_id.split("/").pop(), // nome do arquivo
        description: "",
        imageUrl: img.secure_url,
      });

      console.log(`Importada: ${img.secure_url}`);
    }

    console.log("Importação concluída!");
    process.exit(0);
  } catch (err) {
    console.error("Erro ao importar imagens:", err);
    process.exit(1);
  }
}

importImages();
