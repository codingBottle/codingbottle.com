import { css, ThemeProvider } from "@emotion/react";
import Nav from "components/nav";
import { domMax, LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LazyMotion features={domMax}>
        <GlobalStyle />
     
        <Nav />
        <Component {...pageProps} />
      </LazyMotion>
    </ThemeProvider>
  );
}

const layout = css`
  max-width: 480px;
  min-height: calc(var(--var, 1vh) * 100);
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${theme.color.warmBlack};
`;
