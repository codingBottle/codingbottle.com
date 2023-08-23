/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
} from "constants/motion";
import { m } from "framer-motion";
import theme from "styles/theme/theme";

interface Props {
  title: string;
  inform: string;
}

export default function Inform({ title, inform }: Props) {
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
      <m.p
        css={informCss}
        variants={defaultFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {inform}
      </m.p>
    </div>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const titleCss = css`
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: ${theme.fontWeight.semiBold};
`;

const informCss = css`
  color: ${theme.color.warmGray};
  font-size: 1.14rem;
  font-weight: ${theme.fontWeight.light};
`;
