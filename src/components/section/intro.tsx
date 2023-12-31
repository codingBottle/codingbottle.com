/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import bgLottie from "assets/lottieJSON/wave.json";
import LottieWrapper from "components/lottieWrapper";
import theme from "styles/theme/theme";

export default function Intro() {
  return (
    <section css={wrapper}>
      <div css={inWrapper}>
        <div css={contentWrapper}>
          <h1 css={title}>CodingBottle</h1>
          <p css={subTitle}>
            끊임없이 흘러가는 우리, Developer X Designer 코딩보틀
          </p>
        </div>
        <div>
          <LottieWrapper lottieData={bgLottie} />
        </div>
      </div>
    </section>
  );
}

const wrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const inWrapper = css`
  height: auto;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40%;
`;

const title = css`
  font-size: 3.6rem;
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: 0.6px;

  @media (max-width: 380px) {
    font-size: 3rem;
  }
`;

const subTitle = css`
  font-size: 1rem;
  color: ${theme.color.text};
  font-weight: ${theme.fontWeight.light};

  @media (max-width: 380px) {
    font-size: 0.87rem;
    margin-top: 0.5rem;
  }
`;
