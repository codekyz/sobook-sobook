import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderMenu from "../components/HeaderMenu";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme";

const Main = styled.main`
  height: 100%;
  margin: 10px;
  padding: 20px;
  background: linear-gradient(
    ${(props) => props.theme.backColor},
    ${(props) => props.theme.snowColor}
  );
  border: 1px solid ${(props) => props.theme.fontColor};
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HeaderMenu />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
