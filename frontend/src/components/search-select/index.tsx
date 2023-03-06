import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import { searchOptionValues } from "../../constants";
import * as Styled from "../../styles/home-page.styled";

interface IOption {
  name: string;
  title: string;
  id: number;
}

interface ISearchSelectProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const SearchSelectComponent = ({ name, setName }: ISearchSelectProps) => {
  const { resetForm } = useFormikContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [header, setHeader] = useState<string>("Transaction ID");

  const handleHeaderClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value: IOption) => {
    setHeader(value.title);
    setIsOpen(false);
    setName(value.name);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm, name]);

  const openClassName = isOpen ? "open" : "hidden";

  return (
    <Styled.SelectWrapper>
      <Styled.SelectHeader onClick={handleHeaderClick}>
        {header}
        <Styled.DropdownArrow className={openClassName}>
          <span />
          <span />
        </Styled.DropdownArrow>
      </Styled.SelectHeader>
      <Styled.SelectHiddenContent className={openClassName}>
        {searchOptionValues.map((option) => (
          <Styled.SelectOption
            key={option.id}
            onClick={() => handleOptionClick(option)}
          >
            {option.title}
          </Styled.SelectOption>
        ))}
      </Styled.SelectHiddenContent>
    </Styled.SelectWrapper>
  );
};

export default SearchSelectComponent;
