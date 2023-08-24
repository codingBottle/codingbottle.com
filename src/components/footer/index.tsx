/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme/theme";

export default function Footer() {
  return (
    <footer css={wrapper}>
      <div css={inWrapper}>
        <span css={logoText}>codingBottle</span>
        <span css={context}>
          Copyright © Develop, Design by three. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

const wrapper = css`
  height: 10rem;
  background-color: #323131;
`;

const inWrapper = css`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.25rem;
`;

const logoText = css`
  margin-bottom: 0.3rem;
  opacity: 0.9;
  font-size: 0.95rem;
  font-weight: ${theme.fontWeight.bold};
`;

const context = css`
  opacity: 0.7;
  color: ${theme.color.warmGray};
  font-size: 0.8rem;
  font-weight: ${theme.fontWeight.light};
`;
