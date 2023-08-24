/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { defaultFadeInUpVariants } from "constants/motion";
import { m } from "framer-motion";
import theme from "styles/theme/theme";

interface Props {
  title: string;
  date: string;
}

export default function Date({ title, date }: Props) {
  return (
    <div css={wrapper}>
      <m.span
        css={titleCss}
        variants={defaultFadeInUpVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {title}
      </m.span>
      <p css={dateCss}>{date}</p>
    </div>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const titleCss = css`
  font-size: 1.1rem;
  font-weight: ${theme.fontWeight.normal};
  letter-spacing: 0.4px;
  color: #4e8eb1;
`;

const dateCss = css`
  font-size: 3.5rem;
  font-weight: ${theme.fontWeight.bold};
  line-height: 4rem;
  letter-spacing: 0.5px;
  opacity: 0.96;

  @media (max-width: 380px) {
    font-size: 2.5rem;
  }
`;
