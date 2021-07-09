import express from "express";
import configureRoutes from "./controllers";
import { handleRequest, handleError } from "./middlewares/index";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(handleRequest);

configureRoutes(app);

app.use(handleError);

export default app;