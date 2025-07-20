import "dotenv/config";
import logger from "./config/pino-config.js";
import express from "express";
import cors from "cors";
import { pinoHttp } from "pino-http";
import cookieParser from "cookie-parser";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import LogRouter from "./routes/logs/footprint_logs.js";
const app = express();

// LOGGER INIT
app.use(pinoHttp({ logger }));

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    credentials: true,
  })
);

// auth init
app.all("/api/auth/{*splat}", toNodeHandler(auth));

// MIDDLEWARE INIT
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

// APP ROUTES
app.get("/", (req, res) => {
  res.status(200).send("Welcome to CarbConnect");
});
app.use(LogRouter);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Process started at PORT ${PORT}`);
  logger.info(`Process started at PORT ${PORT}`);
});
