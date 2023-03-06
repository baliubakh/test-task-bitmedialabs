import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/error.util";
import { checkTransaction } from "../validator";

export const checkJoiError = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const target = req.query;
  const err = checkTransaction.validate(target).error;

  if (err) {
    next(new CustomError(400, "Bad Request"));
    return;
  }
  next();
};
