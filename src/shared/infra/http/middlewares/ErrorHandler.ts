import AppErrors from "../../../errors/AppErrors";
import { Request, Response, NextFunction } from "express";

const ErrorHandler = (

    error: Error,
    request: Request,
    response: Response,
    _: NextFunction
): Response | void => {
   /**
   * Verifica se o erro disparado é um AppError
   */
    if(error instanceof AppErrors) {
        console.log("AppErrors detected");

        // envia uma resposta com o status e mensagem definidos no AppError
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }

    // eslint-disable-next-line no-console
    console.error(error);

    return response.status(500).json({
        status: "error",
        title: error.name,
        message: error.message,
    });


};

export default ErrorHandler;
        