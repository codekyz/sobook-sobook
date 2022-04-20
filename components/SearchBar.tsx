import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({ pathname: "/result", query: { search: searchValue } });
    setSearchValue("");
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  return (
    <>
      <SearchForm onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="도서를 검색하세요"
          value={searchValue}
          onChange={onChange}
        />
      </SearchForm>
    </>
  );
}
