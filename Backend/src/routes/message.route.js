import express from "express";
import {
  createMessage,
  getMessages,
} from "../controllers/message.controller.js";

const router = express.Router();

router.post("/messages", createMessage);
router.get("/messages", getMessages); // opcional

export default router;
