export interface ITransaction {
  id: string;
  s: string;
  r: string;
  blockNumber: number;
  timestamp: string;
  value: number;
  gas: number;
}

export interface ITransactionRouterResponse {
  currentBlock: number;
  transactions: ITransaction[];
}

export interface IGetBlockNumberResponse {
  data: {
    jsonrpc: string;
    id: number;
    result: string;
  };
}

export interface IBlockResponse {
  hash: string;
  s: string;
  r: string;
  blockNumber: string;
  value: string;
  gasPrice: string;
  gas: string;
}

export interface ITransactionResponse {
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: string;
  to: string;
  transactionIndex: string;
  value: string;
  type: string;
  v: string;
  r: string;
  s: string;
}

export interface ITransactionBlockResponse {
  timestamp: string;
  gasUsed: string;
  hash: string;
  transactions: Array<ITransactionResponse>;
}

export interface ITransactionRequest {
  id?: string;
  s?: string;
  r?: string;
  blockNumber?: number;
}
