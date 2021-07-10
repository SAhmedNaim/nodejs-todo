import winston from "winston";
import expressWinston from "express-winston";
import winstonFile from "winston-daily-rotate-file";
import winstonMongo from "winston-mongodb";
import { uri } from "./mongo";

const mongoErrorTransport = new winston.transports.MongoDB({
    db: uri,
    metaKey: 'meta'
})

const fileInfoTransport = new (winston.transports.DailyRotateFile) ({
    filename: 'log/log-info-%DATE%.log',
    datePattern: 'yyyy-MM-DD-HH'
});

const fileErrorTransport = new (winston.transports.DailyRotateFile) ({
    filename: 'log/log-error-%DATE%.log',
    datePattern: 'yyyy-MM-DD-HH'    
});

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
        fileInfoTransport
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    meta: true, // Meta might be true or false
    msg: getMessage
});

export const errorLogger = () => expressWinston.errorLogger({
    transports: [
        new winston.transports.Console(),
        fileErrorTransport,
        mongoErrorTransport
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    meta: true, // // Meta might be true or false
    msg: '{ "correlationId": "{{ req.headers["x-correlation-id"] }}", "error": "{{ err.message }}" }'
});