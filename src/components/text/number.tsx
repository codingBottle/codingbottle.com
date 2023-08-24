/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme/theme";

interface Props {
  num: string;
  title: string;
}

export default function Number({ num, title }: Props) {
  return (
    <div css={wrapper}>
      <span>Nr. {num}</span>
      <span>{title}</span>
    </div>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 1.4rem;
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.9rem;
  color: #5074ed;
`;
