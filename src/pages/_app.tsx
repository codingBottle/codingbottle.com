/** @jsxImportSource @emotion/react */

import { css, ThemeProvider } from "@emotion/react";
import Nav from "components/nav";
import { domMax, LazyMotion } from "framer-motion";
import useWindowSize from "hooks/useWindowSize";
import type { AppProps } from "next/app";
import { PropsWithChildren, useEffect } from "react";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme/theme";

let vh = 0;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LazyMotion features={domMax}>
        <GlobalStyle />
        <Layout>
          <Nav />
          <Component {...pageProps} />
        </Layout>
      </LazyMotion>
    </ThemeProvider>
  );
}

function Layout({ children }: PropsWithChildren<{}>) {
  const windowSize = useWindowSize();

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [windowSize.height]);

  return <div css={layoutCss}>{children}</div>;
}

const layoutCss = css`
  height: calc(var(--var, 1vh) * 100);
  width: 100vw;
  max-width: 480px;
  margin: 0 auto;
  background-color: ${theme.color.warmBlack};
`;
