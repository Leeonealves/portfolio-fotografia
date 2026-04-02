
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import photoRoute from "./routes/photo.route.js";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";

dotenv.config();

const uri = process.env.DATABASE_URL_NO_SRV;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB conectado com sucesso!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/photos", photoRoute);
app.use("/api/auth", authRoute);
app.use("/api", messageRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
