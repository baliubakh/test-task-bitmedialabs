import { IErrorBody } from "../types/error.types";

export class CustomError extends Error {
  status: number;
  data: IErrorBody;
  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.data = {
      success: false,
      message,
    };
  }

  static badRequest(message: string) {
    return new CustomError(400, message);
  }

  static serverProblem(message: string) {
    return new CustomError(500, message);
  }
}
