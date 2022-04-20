import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styled from "styled-components";
import { Book } from "../modules/store";

type Data = {
  items: [Book];
};

const List = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.fontColor};
  padding: 16px 0;
  button {
    margin-right: 10px;
  }
`;

const Result = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      {data.items.map((item: Book) => (
        <List key={item.isbn}>
          <button>추가</button>
          {item.title.replace("<b>", "").replace("</b>", "")}
          {" - "}
          {item.author.replace("<b>", "").replace("</b>", "")}
        </List>
      ))}
    </>
  );
};

export default Result;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search } = context.query;
  const response = await fetch(
    `https://openapi.naver.com/v1/search/book.json?query=${search}&display=100`,
    {
      headers: {
        "X-Naver-Client-Id": `${process.env.CLIENT_ID}`,
        "X-Naver-Client-Secret": `${process.env.CLIENT_SECRET}`,
      },
    }
  );
  const data: Data = await response.json();

  return {
    props: {
      data,
    },
  };
};
