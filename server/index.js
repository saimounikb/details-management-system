import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use("/", Routes);

const username = process.env.DB_user;
const password = process.env.DB_pass;
const PORT = 8001;
Connection(username, password);
app.listen(PORT, () => console.log(`running on ${PORT}`));
