import type { InferGetServerSidePropsType, NextPage } from "next";
import styled from "styled-components";
import { GetServerSideProps } from "next";

type Book = {
  title: string;
  image: string;
  author: string;
  publisher: string;
  description: string;
  isbn: string;
};

const Main = styled.main`
  height: 50vh;
  margin: 10px;
  background: linear-gradient(
    ${(props) => props.theme.backColor},
    ${(props) => props.theme.snowColor}
  );
  border: 1px solid ${(props) => props.theme.fontColor};
`;

const Home = ({
  response,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <Main>
      {response.items.map((item: Book) => (
        <div key={item.isbn}>{item.title}</div>
      ))}
    </Main>
  );
};

export default Home;

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
