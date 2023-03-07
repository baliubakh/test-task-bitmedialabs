import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import { searchOptionValues } from "../../constants";
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
    <div className="select-wrapper">
      <div className="select-header" onClick={handleHeaderClick}>
        {header}
        <div className={`dropdownArrow ${openClassName}`}>
          <span />
          <span />
        </div>
      </div>
      <div className={`hidden-wrapper ${openClassName}`}>
        {searchOptionValues.map((option) => (
          <div
            className="select-option"
            key={option.id}
            onClick={() => handleOptionClick(option)}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSelectComponent;
