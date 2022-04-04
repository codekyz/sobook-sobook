import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderMenu from "../components/HeaderMenu";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HeaderMenu />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
