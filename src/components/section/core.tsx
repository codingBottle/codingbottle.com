/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import fish from "assets/lottieJSON/fish.json";
import LottieWrapper from "components/lottieWrapper";
import SectionAbout from "components/text/sectionAbout";
import { MOBILE_CORE, SERVER_CORE, WEB_CORE } from "constants/core";
import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
} from "constants/motion";
import { m } from "framer-motion";
import theme from "styles/theme/theme";

export default function Core() {
  return (
    <section>
      <SectionAbout title="Core" subTitle="부끄러움이 많아서리" />
      <div css={lottieWrapper}>
        <div css={lottieInWrapper}>
          <LottieWrapper lottieData={fish} />
        </div>
      </div>

      <div css={wrapper}>
        <div css={contentWrapper}>
          <m.span
            css={titleCss}
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            WEB
          </m.span>

          {WEB_CORE.map((item, index) => (
            <m.span
              key={index}
              css={contentCss}
              variants={defaultFadeInVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {item}
            </m.span>
          ))}
        </div>
        <div css={contentWrapper}>
          {" "}
          <m.span
            css={titleCss}
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            SERVER
          </m.span>
          {SERVER_CORE.map((item, index) => (
            <m.span
              key={index}
              css={contentCss}
              variants={defaultFadeInVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {item}
            </m.span>
          ))}
        </div>
        <div css={contentWrapper}>
          <m.span
            css={titleCss}
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            MOBILE
          </m.span>

          {MOBILE_CORE.map((item, index) => (
            <m.span
              key={index}
              css={contentCss}
              variants={defaultFadeInVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {item}
            </m.span>
          ))}
        </div>
      </div>
    </section>
  );
}

const wrapper = css`
  padding: 1rem 3.5rem;
  @media (max-width: 380px) {
    padding: 1rem 0.9rem;
  }
`;

const lottieWrapper = css`
  position: relative;
  width: 100%;
`;

const lottieInWrapper = css`
  position: absolute;
  width: 100%;
`;

const titleCss = css`
  font-size: 1.5rem;
  font-weight: ${theme.fontWeight.semiBold};
`;

const contentCss = css`
  font-size: 1.1rem;
  font-weight: ${theme.fontWeight.light};
  max-width: 13rem;
  text-align: right;
`;

const contentWrapper = css`
  min-height: 7rem;
  display: flex;
  justify-content: space-between;
`;
