import { Request, Response } from "express";
import { transactionsRepository } from "../repositories/transactions.repository";
import { transactionsServices } from "../services";
import { ITransaction } from "../types/transactions.types";

class TransactionsController {
  public async getTransactions(req: Request, res: Response) {
    const filters = req.query;
    const { page } = req.params;
    if (page) {
      const transactions = await transactionsRepository.getByPageNumber(
        filters,
        +page
      );
      if (transactions) {
        res.status(200).send(transactions);
      } else {
        res.status(404).send({ message: "Not Found" });
      }
    } else {
      res.status(400).send({ message: "Bad Request" });
    }
  }

  public async getRecentTransaction(_req: Request, res: Response) {
    const transactions: ITransaction[] =
      await transactionsServices.getRecentBlockTransactionsByNumber();

    await transactionsRepository.saveManyTransactions(transactions);
    res.status(200).send({ transactions });
  }
}

export const transactionsController = new TransactionsController();
