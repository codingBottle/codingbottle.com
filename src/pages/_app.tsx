import { css } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div css={layout}>
      <Component {...pageProps} />
    </div>
  );
}

const layout = css`
  max-width: 480px;
  min-height: calc(var(--var, 1vh) * 100);
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;
