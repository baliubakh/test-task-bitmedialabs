import React from "react";
import { tableHeaderValues } from "../../constants";
import * as Styled from "../../styles/home-page.styled";
import { ITransaction } from "../../types";

interface ITableProps {
  data: ITransaction[];
  currentBlock: number;
}

const TableComponent = ({ data, currentBlock }: ITableProps) => {
  return (
    <Styled.TableWrapper>
      <Styled.TableComponentWrapper>
        <Styled.TableHead>
          <Styled.TableRow>
            {tableHeaderValues.map((header, idx) => (
              <Styled.TableHeader key={idx}>{header}</Styled.TableHeader>
            ))}
          </Styled.TableRow>
        </Styled.TableHead>
        <Styled.TableBody>
          {data.map((transaction) => (
            <Styled.TableRow>
              <Styled.TableData>{transaction.blockNumber}</Styled.TableData>
              <Styled.TableData>
                <Styled.Link
                  href={`https://etherscan.io/tx/${transaction.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {transaction.id}
                </Styled.Link>
              </Styled.TableData>
              <Styled.TableData>{transaction.s}</Styled.TableData>
              <Styled.TableData>{transaction.r}</Styled.TableData>
              <Styled.TableData>
                {currentBlock - transaction.blockNumber}
              </Styled.TableData>
              <Styled.TableData>
                {" "}
                {new Date(
                  parseInt(transaction.timestamp, 16) * 1000
                ).toLocaleDateString()}
              </Styled.TableData>
              <Styled.TableData>
                {transaction.value.toFixed(10)}
              </Styled.TableData>
              <Styled.TableData>{transaction.gas.toFixed(10)}</Styled.TableData>
            </Styled.TableRow>
          ))}
        </Styled.TableBody>
      </Styled.TableComponentWrapper>
    </Styled.TableWrapper>
  );
};

export default TableComponent;
