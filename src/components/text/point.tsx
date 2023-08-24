/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import tide from "assets/lottieJSON/tide.json";
import LottieWrapper from "components/lottieWrapper";
import theme from "styles/theme/theme";
interface Props {
  title: string;
  content: string;
}

export default function Point({ title, content }: Props) {
  return (
    <>
      <div css={lottieWrapper}>
        <LottieWrapper lottieData={tide} />
        <div css={wrapper}>
          <span css={titleCss}>{title}</span>
          <span css={contentCss}>{content}.</span>
        </div>
      </div>
    </>
  );
}

const wrapper = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 2;
  top: 0px;
  width: 100%;
`;

const titleCss = css`
  font-size: 1.6rem;
  font-weight: ${theme.fontWeight.semiBold};
  letter-spacing: 0.4px;
  line-height: 2.5rem;
  opacity: 0.85;

  @media (max-width: 380px) {
    line-height: 1.3rem;
  }
`;

const contentCss = css`
  font-size: 1rem;
  font-weight: ${theme.fontWeight.normal};
  margin-top: 1rem;
  letter-spacing: 0.3px;
  opacity: 0.8;
`;

const lottieWrapper = css`
  position: relative;
`;
