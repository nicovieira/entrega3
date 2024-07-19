import { ZodError } from "zod";
import { app_error } from "../errors/appError";
import { NextFunction, Request, Response } from "express";

export class handle_errors {
  static execute(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof app_error) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    if (error instanceof ZodError) {
      const newError = { errors: error.issues };
      return res.status(400).json(newError);
    }

    return res.status(500).json({ message: "Internal server error" });
  }
}
