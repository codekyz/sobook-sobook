import type { InferGetServerSidePropsType, NextPage } from "next";
import styled from "styled-components";
import { GetServerSideProps } from "next";

const Main = styled.main`
  height: 50vh;
  margin: 10px;
  background: linear-gradient(
    ${(props) => props.theme.backColor},
    ${(props) => props.theme.snowColor}
  );
  border: 1px solid ${(props) => props.theme.fontColor};
`;

const Home: NextPage = () => {
  return <Main></Main>;
};

export default Home;
