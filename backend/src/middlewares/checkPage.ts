import { NextFunction, Request, Response } from "express";
import { isStrNumeric } from "../utils";
import { CustomError } from "../utils/error.util";

export const checkPage = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { page } = req.params;

  if (!isStrNumeric(page)) {
    return CustomError.badRequest("Page value is invalid");
  }
  next();
};
