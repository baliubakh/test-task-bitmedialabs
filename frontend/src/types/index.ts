export interface ISearchProps {
  blockNumber: number;
  s: string;
  r: string;
  id: string;
}

export interface ITransaction {
  blockNumber: number;
  id: string;
  s: string;
  r: string;
  timestamp: string;
  value: number;
  gas: number;
}

export interface ITransactionRouterResponse {
  currentBlock: number;
  transactions: ITransaction[];
}
