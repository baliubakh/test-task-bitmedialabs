import axios from "axios";
import { config } from "../configs";
import {
  IGetBlockNumberResponse,
  ITransactionBlockResponse,
} from "../types/transactions.types";
import { getFormattedData } from "../utils";

class TransactionsServices {
  private url?: string;
  private api_key?: string;
  private numUrl: string;
  private blockUrl: (num: string) => string;
  constructor() {
    const { ETHERSCAN_API_URL, ETHERSCAN_API_KEY } = config;
    this.url = ETHERSCAN_API_URL;
    this.api_key = ETHERSCAN_API_KEY;
    this.numUrl = `${this.url}/api?module=proxy&action=eth_blockNumber&apikey=${this.api_key}`;
    this.blockUrl = (num: string) =>
      `${this.url}/api?module=proxy&action=eth_getBlockByNumber&tag=${num}&boolean=true&apikey=${this.api_key}`;
  }

  public async getRecentBlockNumber() {
    const response: IGetBlockNumberResponse = await axios.get(this.numUrl);

    return response.data.result;
  }

  public async getRecentBlockTransactionsByNumber(recentBlockNum: string) {
    const response = await axios.get(this.blockUrl(recentBlockNum));

    const transactionsBlock: ITransactionBlockResponse = response.data.result;

    const transactions = transactionsBlock.transactions.map((el) =>
      getFormattedData(
        el,
        transactionsBlock.gasUsed,
        transactionsBlock.timestamp
      )
    );
    return transactions;
  }
}

export const transactionsServices = new TransactionsServices();
