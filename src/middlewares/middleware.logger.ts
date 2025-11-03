import {request, response, NextFunction } from 'express';
import {logger } from '../utils/utils.logger';

export const loggerMiddleware = (req=request, res=response, next:NextFunction) => {
    logger.info(`Method: ${req.method} - URL: ${req.url}`);
    next();
}

 

