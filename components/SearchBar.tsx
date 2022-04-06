import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import { Book } from "../modules/store";

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

const Results = styled.div`
  position: fixed;
  top: 50px;
  right: 10px;
`;

export default function SearchBar({
  response,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const [searchValue, setSearchValue] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <Results>
        {response?.items.map((item: Book) => (
          <span
            key={item.isbn}
            dangerouslySetInnerHTML={{ __html: item.title }}
          ></span>
        ))}
      </Results>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = encodeURI("화해");
  const response = await (
    await fetch(
      `https://openapi.naver.com/v1/search/book.json?query=${query}`,
      {
        headers: {
          "X-Naver-Client-Id": `${process.env.CLIENT_ID}`,
          "X-Naver-Client-Secret": `${process.env.CLIENT_SECRET}`,
        },
      }
    )
  ).json();

  return {
    props: {
      response,
    },
  };
};
