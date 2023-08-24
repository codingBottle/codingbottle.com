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

    ::-webkit-scrollbar {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  html,
  body {
    background-color: ${theme.color.white};
    color: ${theme.color.white};
  }

  details > summary {
    list-style: none;
  }
  
  details > summary::-webkit-details-marker {
    display: none;
  }
`;
