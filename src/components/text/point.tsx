/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { defaultFadeInUpVariants } from "constants/motion";
import { m } from "framer-motion";
import theme from "styles/theme/theme";

interface Props {
  title: string;
  content: string;
}

export default function Point({ title, content }: Props) {
  return (
    <m.div
      css={wrapper}
      variants={defaultFadeInUpVariants}
      initial="hidden"
      whileInView="animate"
      animate="animate"
    >
      <span css={titleCss}>{title}</span>
      <span css={contentCss}>{content}.</span>
    </m.div>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const titleCss = css`
  font-size: 1.6rem;
  font-weight: ${theme.fontWeight.semiBold};
  color: #f0faff;
  letter-spacing: 0.4px;
  opacity: 0.9;
`;

const contentCss = css`
  font-size: 1rem;
  font-weight: ${theme.fontWeight.normal};
  margin-top: 1rem;
  letter-spacing: 0.3px;
  opacity: 0.85;
`;
