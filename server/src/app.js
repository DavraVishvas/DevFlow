import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express()

app.use(cors({ origin: process.env.CLIENT_URL, Credential: true }))
app.use(express.json())
app.use(cookieParser())

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" })
})

export default app;