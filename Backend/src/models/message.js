import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    // 🔥 opcional (para painel admin)
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // cria createdAt e updatedAt automaticamente
  },
);

export default mongoose.model("Message", messageSchema);
