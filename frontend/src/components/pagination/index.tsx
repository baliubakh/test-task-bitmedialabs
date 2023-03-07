import React from "react";
import PaginationArrow from "../../common/arrow";
import { amoutOfPages } from "../../constants";

interface IPaginationProps {
  page: number;
  startNum: number;
  handleButtonClick: (pageNum: number) => void;
  handleRightArrowClick: () => void;
  handleLeftArrowClick: () => void;
}

const Pagination = ({
  page,
  startNum,
  handleButtonClick,
  handleRightArrowClick,
  handleLeftArrowClick,
}: IPaginationProps) => {
  return (
    <div className="pagination-wrapper">
      <div
        className={`left-arrow-wrapper ${
          page - 1 <= 0 ? "disabled" : "active"
        }`}
        onClick={handleLeftArrowClick}
      >
        <PaginationArrow />
      </div>
      <div className="button-wrapper">
        {new Array(amoutOfPages).fill("_").map((_, idx) => (
          <button
            className={`page-button ${
              startNum + idx === page ? "active" : "regular"
            }`}
            key={idx}
            onClick={() => handleButtonClick(startNum + idx)}
          >
            {startNum + idx}
          </button>
        ))}
      </div>
      <div
        onClick={handleRightArrowClick}
        className={"right-arrow-wrapper active"}
      >
        <PaginationArrow />
      </div>
    </div>
  );
};

export default Pagination;
