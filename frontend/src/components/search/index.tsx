import { Formik, Form, FormikHelpers } from "formik";
import React, { useState } from "react";
import { searchInitialValues } from "../../constants";
import * as Styled from "../../styles/home-page.styled";
import { ISearchProps } from "../../types";
import SearchSelectComponent from "../search-select";

interface ISearchComponent {
  setFilters: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent = ({ setFilters }: ISearchComponent) => {
  const [name, setName] = useState<string>("id");

  const handleSubmit = (
    values: ISearchProps,
    { resetForm }: FormikHelpers<ISearchProps>
  ) => {
    const result = `?${Object.entries(values)
      .map((el) => (el[1] && `${el[0]}=${el[1]}`) || "")
      .join("")}`;
    setFilters(result);
  };

  return (
    <Styled.SearchWrapper>
      <Formik initialValues={searchInitialValues} onSubmit={handleSubmit}>
        <Form>
          <Styled.SearchBox>
            <Styled.SearchInput name={name} placeholder="Search..." />
            <Styled.Separator />
            <SearchSelectComponent name={name} setName={setName} />
            <Styled.SearchIconWrapper type="submit">
              <Styled.SearchIcon src="/images/search.svg" alt="search icon" />
            </Styled.SearchIconWrapper>
          </Styled.SearchBox>
        </Form>
      </Formik>
    </Styled.SearchWrapper>
  );
};

export default SearchComponent;
