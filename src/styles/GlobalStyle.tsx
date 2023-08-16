import { Global, Theme, css } from "@emotion/react";

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    word-break: keep-all;
  }

  html,
  body {
    background-color: ${theme.color.white};
    color: ${theme.color.black};
  }
`;
