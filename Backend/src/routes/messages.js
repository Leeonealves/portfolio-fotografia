import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// 🔥 Criar mensagem (ex: formulário de contacto)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Todos os campos são obrigatórios",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      message: "Mensagem enviada com sucesso",
      data: newMessage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erro ao enviar mensagem",
    });
  }
});

// 🔥 Buscar todas as mensagens (admin)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erro ao buscar mensagens",
    });
  }
});

// 🔥 Apagar mensagem
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Message.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        message: "Mensagem não encontrada",
      });
    }

    res.json({
      message: "Mensagem apagada com sucesso",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erro ao apagar mensagem",
    });
  }
});

export default router;
