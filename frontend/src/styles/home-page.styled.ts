import styled from "styled-components";
import { Field } from "formik";
import { themes } from "./themes";

export const HomePageContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 70px;
  position: relative;

  @media ${themes.media.minPCFullHD} {
    width: 1800px;
    margin: 0 auto;
  }
`;

export const HomePageWrapper = styled.div`
  width: 100%;
  padding: 0 10%;

  @media ${themes.media.maxTabletLandScape} {
    padding-inline: 5%;
  }
`;

export const SearchWrapper = styled.div`
  margin-top: 3.75rem;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${themes.colors.lightGrey};
  width: fit-content;
  border-radius: 10px;
`;

export const SearchInput = styled(Field)`
  width: 15rem;
  height: 3rem;
  outline: none;
  border: 0;
  padding-left: 1rem;

  &::placeholder {
    color: ${themes.colors.grey};
    font-style: italic;
  }

  @media ${themes.media.maxMobile} {
    width: 10rem;
  }

  @media ${themes.media.maxLowScreenMobile} {
    width: 8rem;
  }
`;

export const SelectHeader = styled.div`
  height: 3rem;
  width: 13rem;
  font-size: 0.875rem;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.75rem;
  color: ${themes.colors.lightBlack};

  @media ${themes.media.maxMobile} {
    font-size: 0.7rem;
    width: 10rem;
  }

  @media ${themes.media.maxLowScreenMobile} {
    width: 8rem;
  }
`;

export const Separator = styled.div`
  height: 32px;
  width: 1px;
  background-color: ${themes.colors.lightGrey} !important;

  @media ${themes.media.maxMobile} {
    display: none;
  }
`;

export const DropdownArrow = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  position: relative;
  margin: 0 1rem;

  span {
    top: 0.5rem;
    position: absolute;
    width: 0.75rem;
    height: 0.15rem;
    background-color: ${themes.colors.blue};
    display: inline-block;
    transition: all 0.2s ease;

    &:first-of-type {
      left: 0;
      transform: rotate(45deg);
    }

    &:last-of-type {
      right: 0;
      transform: rotate(-45deg);
    }
  }

  &.open {
    span {
      &:first-of-type {
        transform: rotate(-45deg);
      }

      &:last-of-type {
        transform: rotate(45deg);
      }
    }
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectHiddenContent = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  border-inline: 1px solid ${themes.colors.lightGrey};

  &.hidden {
    display: none;
  }

  &.open {
    display: block;
  }
`;

export const SelectOption = styled.div`
  height: 3rem;
  width: 100%;
  font-size: 0.875rem;
  line-height: 17px;
  background-color: ${themes.colors.secondary};
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  border-bottom: 1px solid ${themes.colors.lightGrey};
  color: ${themes.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${themes.colors.blue};
    color: ${themes.colors.secondary};
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const SearchIconWrapper = styled.button`
  margin-left: 1rem;
  background-color: ${themes.colors.blue};
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 0;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const TableComponentWrapper = styled.table`
  margin-top: 1rem;
  width: 100%;
  border: 1px solid ${themes.colors.secondary};
  border-block: 0;

  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border: 1px solid ${themes.colors.secondary};
  border-block: 0;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding-inline: 0.75rem;
  color: ${themes.colors.secondary};
  background-color: ${themes.colors.blue};
  font-size: 1rem;
  font-weight: ${themes.font.weight.normal};
  border: 0;
  border-right: 1px solid ${themes.colors.secondary};
  height: 3rem;

  &:first-of-type {
    border-top-left-radius: 10px;
  }

  &:last-of-type {
    border-top-right-radius: 10px;
  }
`;

export const TableData = styled.td`
  border: 1px solid ${themes.colors.secondary};
  border-block: 0;
  height: 2rem;
  background-color: ${themes.colors.lightGrey};
  padding-inline: 0.75rem;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 8.75rem;
  white-space: nowrap;

  @media ${themes.media.maxTabletLandScape} {
    max-width: 2.5rem;
  }
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const Link = styled.a`
  color: ${themes.colors.blue};
`;

export const PaginationWrapper = styled.div`
  margin: 3.5rem auto 3rem;
  width: fit-content;
  display: flex;
`;

export const LeftArrowWrapper = styled.div`
  transform: rotate(180deg);
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.active {
    color: ${themes.colors.blue};
  }

  &.disabled {
    color: ${themes.colors.lightGrey};
  }
`;
export const RightArrowWrapper = styled.div`
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.active {
    color: ${themes.colors.blue};
  }

  &.disabled {
    color: ${themes.colors.lightGrey};
  }
`;

export const PageButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  transition: background-color 0.3s;
  border: 2px solid ${themes.colors.lightGrey};
  color: ${themes.colors.primary};
  font-size: 1rem;
  cursor: pointer;

  &.regular {
    background-color: ${themes.colors.secondary};
  }

  &:hover {
    color: ${themes.colors.secondary};
    background-color: ${themes.colors.blue};
  }

  &.active {
    color: ${themes.colors.secondary};
    background-color: ${themes.colors.blue};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;
