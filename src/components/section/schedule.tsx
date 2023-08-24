/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import seagullLottie from "assets/lottieJSON/seagull.json";
import LottieWrapper from "components/lottieWrapper";
import Date from "components/text/date";
import {
  INTERVIEW_RESULT,
  INTERVIEW_START,
  PORTFOLIO_RESULT,
  RECRUIT_START,
} from "constants/date";
import { defaultFadeInUpVariants } from "constants/motion";
import { m } from "framer-motion";

export default function Schedule() {
  return (
    <>
      <section css={wrapper}>
        <m.div
          css={dateWrapper}
          variants={defaultFadeInUpVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Date title="서류 모집" date={RECRUIT_START} />
          <div css={lottieWrapper}>
            <div css={lottieInWrapper}>
              <LottieWrapper lottieData={seagullLottie} />
            </div>
          </div>
          <div css={dateRight}>
            <Date title="서류 결과 발표" date={PORTFOLIO_RESULT} />
          </div>
          <Date title="면접 진행" date={INTERVIEW_START} />
          {/* <div css={lottieWrapper}>
            <div css={lottieInWrapper}>
              <LottieWrapper lottieData={frontBoatLottie} />
            </div>
          </div> */}
          <div css={dateRight}>
            <Date title="최종 발표" date={INTERVIEW_RESULT} />
          </div>
        </m.div>
      </section>
    </>
  );
}

const lottieWrapper = css`
  position: relative;
  width: 92%;
`;

const lottieInWrapper = css`
  position: absolute;
  width: 100%;
`;

const wrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 2rem;
`;

const dateWrapper = css`
  display: flex;
  flex-direction: column;
`;

const dateRight = css`
  text-align: right;
`;
