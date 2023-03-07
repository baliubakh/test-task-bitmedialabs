import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import HeaderComponent from "../components/header";
import Pagination from "../components/pagination";
import SearchComponent from "../components/search";
import TableComponent from "../components/table";
import { amoutOfPages } from "../constants";
import { ITransactionRouterResponse } from "../types";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    setIsLoading(true);
    const url = process.env.REACT_APP_BASE_URL;
    if (url) {
      axios
        .get<ITransactionRouterResponse>(
          `${url}/api/transactions/${page}${filters}`
        )
        .then((res) => {
          res && setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [page, filters]);

  return (
    <div className="home-page-container">
      <HeaderComponent />

      <div className="home-page-wrapper">
        {data && (
          <>
            <SearchComponent setFilters={setFilters} />
            {(isLoading && <div className="spinner" />) || (
              <>
                <TableComponent
                  data={data.transactions}
                  currentBlock={data.currentBlock}
                />
                <Pagination
                  page={page}
                  startNum={startNum}
                  handleButtonClick={handleButtonClick}
                  handleLeftArrowClick={handleLeftArrowClick}
                  handleRightArrowClick={handleRightArrowClick}
                />
              </>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
