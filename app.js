import "./env.js";
import express from "express";

import cors from "cors";
import connectDB from "./database/db.js";
import authRoutes from "./routes/index.js";
import accountRoutes from "./routes/account.routes.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/account", accountRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
