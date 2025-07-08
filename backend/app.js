import express from "express";
import getData from "./controllers/getData.controller.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  process.env.VERCEL_FRONTEND_URL,
];
app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/api/data", getData);

export default app;
