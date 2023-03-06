import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import HeaderComponent from "../components/header";
import Pagination from "../components/pagination";
import SearchComponent from "../components/search";
import TableComponent from "../components/table";
import { amoutOfPages } from "../constants";
import * as Styled from "../styles/home-page.styled";
import { ITransactionRouterResponse } from "../types";

const HomePage = () => {
  const [data, setData] = useState<ITransactionRouterResponse>();
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<string>("");
  const [startNum, setStartNum] = useState<number>(1);

  const handleButtonClick = (pageNum: number) => {
    if (pageNum !== 0) {
      setPage(pageNum);
    }
  };

  const handleRightArrowClick = () => {
    if ((page - startNum + 1) % amoutOfPages <= 0)
      setStartNum((old) => old + 1);
    setPage((old) => old + 1);
  };

  const handleLeftArrowClick = () => {
    if (page - 1 > 0) {
      setPage((old) => old - 1);
      if ((page - startNum) % amoutOfPages === 0) setStartNum((old) => old - 1);
    }
  };

  useEffect(() => {
    const url = process.env.REACT_APP_BASE_URL;
    if (url) {
      axios
        .get<ITransactionRouterResponse>(
          `${url}/api/transactions/${page}${filters}`
        )
        .then((res) => res && setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [page, filters]);

  return (
    <Styled.HomePageContainer>
      <HeaderComponent />
      <Styled.HomePageWrapper>
        <SearchComponent setFilters={setFilters} />
        {data && (
          <TableComponent
            data={data.transactions}
            currentBlock={data.currentBlock}
          />
        )}
        <Pagination
          page={page}
          startNum={startNum}
          handleButtonClick={handleButtonClick}
          handleLeftArrowClick={handleLeftArrowClick}
          handleRightArrowClick={handleRightArrowClick}
        />
      </Styled.HomePageWrapper>
      <Footer />
    </Styled.HomePageContainer>
  );
};

export default HomePage;
