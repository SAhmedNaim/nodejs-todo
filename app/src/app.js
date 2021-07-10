import express from "express";
import configureRoutes from "./controllers";
import { handleRequest, handleError } from "./middlewares/index";
import { infoLogger } from "./logger";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(handleRequest);

if (process.env.ENVIRONMENT != 'TEST')
{
    app.use(infoLogger());
}

configureRoutes(app);

app.use(handleError);

export default app;