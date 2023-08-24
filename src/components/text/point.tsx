/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme/theme";

interface Props {
  title: string;
  content: string;
}

export default function Point({ title, content }: Props) {
  return (
    <div css={wrapper}>
      <span css={titleCss}>{title}</span>
      <span css={contentCss}>{content}.</span>
    </div>
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
  letter-spacing: 0.4px;
`;

const contentCss = css`
  font-size: 1rem;
  font-weight: ${theme.fontWeight.normal};
  margin-top: 1rem;
  letter-spacing: 0.3px;
`;
