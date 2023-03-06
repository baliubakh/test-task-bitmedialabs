import { transactionsPerPage } from "../constants";
import { TransactionsModel } from "../models";
import { ITransaction, ITransactionRequest } from "../types/transactions.types";

class TransactionsRepository {
  public async getByPageNumber(filter: ITransactionRequest, page: number) {
    return TransactionsModel.find({ ...filter })
      .limit(transactionsPerPage)
      .skip((page - 1) * transactionsPerPage)
      .sort({ timestamp: "desc" })
      .exec();
  }

  public async getByPageNumberCount(filter: ITransactionRequest) {
    return TransactionsModel.count(filter).exec();
  }

  public async saveTransaction(data: ITransaction) {
    return TransactionsModel.create(data);
  }

  public async saveManyTransactions(data: ITransaction[]) {
    return TransactionsModel.insertMany(data);
  }
}

export const transactionsRepository = new TransactionsRepository();
