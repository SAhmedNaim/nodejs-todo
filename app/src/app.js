import express from "express";
import configureRoutes from "./controllers";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());

configureRoutes(app);

export default app;