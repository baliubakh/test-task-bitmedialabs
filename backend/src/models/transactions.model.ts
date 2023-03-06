import { model, Schema } from "mongoose";
import { ITransaction } from "../types/transactions.types";

const transactionsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  s: {
    type: String,
    required: true,
  },
  r: {
    type: String,
    required: true,
  },
  blockNumber: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  gas: {
    type: Number,
    required: true,
  },
});

export const TransactionsModel = model<ITransaction>(
  "transactions",
  transactionsSchema
);
