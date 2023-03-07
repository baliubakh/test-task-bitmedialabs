import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import { searchInitialValues } from "../../constants";
import { ISearchProps } from "../../types";
import SearchSelectComponent from "../search-select";

interface ISearchComponent {
  setFilters: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent = ({ setFilters }: ISearchComponent) => {
  const [name, setName] = useState<string>("id");

  const handleSubmit = (values: ISearchProps) => {
    const result = `?${Object.entries(values)
      .map((el) => (el[1] && `${el[0]}=${el[1]}`) || "")
      .join("")}`;
    setFilters(result);
  };

  return (
    <div className="search-wrapper">
      <Formik initialValues={searchInitialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="search-box">
            <Field
              className="search-input"
              name={name}
              placeholder="Search..."
            />
            <div className="separator" />
            <SearchSelectComponent name={name} setName={setName} />
            <button className="search-icon-wrapper" type="submit">
              <img
                className="search-icon"
                src="/images/search.svg"
                alt="search icon"
              />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchComponent;
