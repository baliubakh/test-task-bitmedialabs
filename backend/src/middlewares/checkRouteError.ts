import { NextFunction, Request, Response } from "express";
import { IErrorBody } from "../types/error.types";

export const checkRouteError = async (
  err: IErrorBody,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    return res.status(err.status || 400).send(err.data);
  } catch (error) {
    return res.status(500).send(error);
  }
};
