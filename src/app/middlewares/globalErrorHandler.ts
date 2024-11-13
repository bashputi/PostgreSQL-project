import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";


const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500;
    let success = false;
    let message = err.message || 'Something went wrong!';
    let error = err;

    if (err instanceof Prisma.PrismaClientValidationError) {
        message = 'Validation Error';
        error = err.message
    }
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'p2002') {
            message = "Duplicate key error";
            error = err.meta;
        }
    }

    res.status(statusCode).json({
        success,
        message,
        error
    })
};

export default globalErrorHandler;