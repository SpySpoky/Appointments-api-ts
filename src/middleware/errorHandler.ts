import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, req, res, next): void => {
    console.error(error);

    res.status(500).json({
        message: "Internal server error"
    });

};

export default errorHandler;