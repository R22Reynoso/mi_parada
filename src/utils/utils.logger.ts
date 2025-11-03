import winston from 'winston';
import path from 'path';
import { log } from 'console';

const logDirectory = path.join (process.cwd(), 'logs');

export const logger =winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'yyyy-MM-DD HH:mm:ss'}),
        winston.format.printf(({ timestamp, level, message}) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: logDirectory }),
    ],
    
});