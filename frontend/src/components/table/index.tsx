import React from "react";
import { tableHeaderValues } from "../../constants";

import { ITransaction } from "../../types";

interface ITableProps {
  data: ITransaction[];
  currentBlock: number;
}

const TableComponent = ({ data, currentBlock }: ITableProps) => {
  return (
    <div className="table-wrapper">
      <div className="table-component-wrapper">
        <thead>
          <tr className="table-row">
            {tableHeaderValues.map((header, idx) => (
              <th className="table-header" key={idx}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((transaction, idx) => (
            <tr className="table-row" key={idx}>
              <td className="table-data">{transaction.blockNumber}</td>
              <td className="table-data">
                <a
                  className="link"
                  href={`https://etherscan.io/tx/${transaction.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {transaction.id}
                </a>
              </td>
              <td className="table-data">{transaction.s}</td>
              <td className="table-data">{transaction.r}</td>
              <td className="table-data">
                {currentBlock - transaction.blockNumber}
              </td>
              <td className="table-data">
                {new Date(
                  parseInt(transaction.timestamp, 16) * 1000
                ).toLocaleDateString()}
              </td>
              <td className="table-data">{transaction.value.toFixed(10)}</td>
              <td className="table-data">{transaction.gas.toFixed(10)}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default TableComponent;
