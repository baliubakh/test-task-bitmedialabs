import { Request, Response } from "express";
import { transactionsRepository } from "../repositories/transactions.repository";
import { transactionsServices } from "../services";
import { ITransaction } from "../types/transactions.types";

class TransactionsController {
  public async getTransactions(req: Request, _res: Response) {
    const filters = req.query;
    const { page } = req.params;
    const currentBlock = await transactionsServices.getRecentBlockNumber();

    if (page) {
      const transactions = await transactionsRepository.getByPageNumber(
        filters,
        +page
      );
      if (transactions && currentBlock) {
        return { currentBlock, transactions };
      }
    }
  }

  public async getRecentTransaction(_req: Request, _res: Response) {
    const currentBlock = await transactionsServices.getRecentBlockNumber();
    const transactions: ITransaction[] =
      await transactionsServices.getRecentBlockTransactionsByNumber(
        currentBlock
      );

    await transactionsRepository.saveManyTransactions(transactions);
    return { transactions };
  }
}

export const transactionsController = new TransactionsController();
