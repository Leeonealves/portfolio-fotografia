import Message from "../models/message.js";

export const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }

    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Erro ao enviar mensagem",
    });
  }
};

// 🔥 ESTA FUNÇÃO TEM DE FICAR FORA DO CATCH E FORA DA OUTRA FUNÇÃO
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar mensagens" });
  }
};
