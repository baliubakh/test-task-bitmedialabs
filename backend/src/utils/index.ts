import cron from "node-cron";
import axios from "axios";
import { gweiInEth } from "../constants";
import { IBlockResponse } from "../types/transactions.types";
import { config } from "../configs";

export const toGwei = (value: string) => parseInt(value, 16) * gweiInEth;

export const toEth = (value: string) =>
  parseInt(value, 16) * gweiInEth * gweiInEth;

export const getFormattedData = <T extends IBlockResponse>(
  data: T,
  gasUsed: string,
  timestamp: string
) => {
  const { hash, value, r, s, blockNumber, gasPrice } = data;

  const gas = toGwei(gasPrice) * toGwei(gasUsed);

  const id = hash;

  return {
    id,
    value: toEth(value),
    blockNumber: parseInt(blockNumber, 16),
    timestamp,
    r,
    s,
    gas,
  };
};

export const isStrNumeric = (str: string) => {
  return !isNaN(+str);
};

const { API_BASE_URL } = config;

export const cronJob = cron.schedule(
  "* * */1 * *",
  () => {
    axios.post(`${API_BASE_URL}/api/transactions/recent`);
  },
  {
    scheduled: false,
  }
);
