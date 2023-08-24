/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "styles/theme/theme";

interface Props {
  question: string;
  answer: string;
}

export default function DetailTag({ question, answer }: Props) {
  return (
    <div css={wrapper}>
      <details css={detailsCss}>
        <summary>
          <span css={questionMark}>Q </span>
          <span>{question}</span>
        </summary>
        <div css={answerWrapper}>
          <span css={answerCss}>{answer}</span>
        </div>
      </details>
    </div>
  );
}

const wrapper = css`
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  background-color: #3c3a3a;
  opacity: 0.8;
  width: 95%;
  margin: 0.4rem 0;
`;

const detailsCss = css`
  padding: 0.75rem 0;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
`;

const questionMark = css`
  font-weight: ${theme.fontWeight.bold};
  margin-right: 0.5rem;
`;

const answerWrapper = css`
  margin-top: 0.5rem;
`;

const answerCss = css`
  font-size: 0.92rem;
  font-weight: ${theme.fontWeight.light};
  word-break: keep-all;
`;
