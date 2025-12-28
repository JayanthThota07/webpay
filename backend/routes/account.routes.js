import express from "express";
import authMiddleware from "../middlewares/auth.middlewares.js";
import { getBalance } from "../controllers/account.controller.js";

const router = express.Router();

router.get("/balance", authMiddleware, getBalance);

export default router;
