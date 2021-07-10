import winston from "winston";
import expressWinston from "express-winston";

const getMessage = (req, res) => {
    let obj = {
        correlationId: req.headers['x-correlation-id'],
        requestBody: req.body
    };

    return JSON.stringify(obj);
}

export const infoLogger = () => expressWinston.logger({
    transports: [
        new winston.transports.Console(),
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    meta: true, // Meta might be true or false
    msg: getMessage
});
