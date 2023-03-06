import React from "react";
import PaginationArrow from "../../common/arrow";
import { amoutOfPages } from "../../constants";
import * as Styled from "../../styles/home-page.styled";

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
    <Styled.PaginationWrapper>
      <Styled.LeftArrowWrapper
        className={page - 1 <= 0 ? "disabled" : "active"}
        onClick={handleLeftArrowClick}
      >
        <PaginationArrow />
      </Styled.LeftArrowWrapper>
      <Styled.ButtonsWrapper>
        {new Array(amoutOfPages).fill("_").map((_, idx) => (
          <Styled.PageButton
            className={startNum + idx === page ? "active" : "regular"}
            key={idx}
            onClick={() => handleButtonClick(startNum + idx)}
          >
            {startNum + idx}
          </Styled.PageButton>
        ))}
      </Styled.ButtonsWrapper>
      <Styled.RightArrowWrapper
        onClick={handleRightArrowClick}
        className={"active"}
      >
        <PaginationArrow />
      </Styled.RightArrowWrapper>
    </Styled.PaginationWrapper>
  );
};

export default Pagination;
