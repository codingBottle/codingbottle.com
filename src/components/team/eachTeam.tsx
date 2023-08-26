/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Link from "next/link";
import theme from "styles/theme/theme";

interface Props {
  emoji: string;
  partName: string[];
  part: string;
  oneWord: string;
  notion: string;
}

export default function EachTeam({
  emoji,
  partName,
  part,
  oneWord,
  notion,
}: Props) {
  return (
    <div css={wrapper}>
      <span css={titleText}>
        {emoji} 코딩보틀 {part}에서는
      </span>
      {partName.map((item, index) => (
        <p css={todoText} key={index}>
          {item}
        </p>
      ))}

      <div css={oneWordWrapper}>
        <span css={oneWordCss}>{oneWord}</span>
      </div>

      <div css={linkWrapper}>
        <div css={btnCss}>
          <Link
            href={notion}
            style={{
              textDecoration: "none",
              color: "white",
            }}
            target="_blank"
          >
            ‣ 자세한 모집 공고 보러가기
          </Link>
        </div>
        <div css={btnCss}>
          <Link
            href="https://forms.gle/yTLb6bqLFtC8FDyE6"
            style={{
              textDecoration: "none",
              color: "white",
            }}
            target="_blank"
          >
            ‣ 지원하기
          </Link>
        </div>
      </div>
    </div>
  );
}

const wrapper = css`
  padding: 2rem 1rem;
  height: auto;
`;

const titleText = css`
  color: #e9eef3;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
  font-weight: ${theme.fontWeight.semiBold};
`;

const todoText = css`
  color: #ced4da;
  font-size: 0.92rem;
  font-weight: ${theme.fontWeight.light};
  margin: 1rem 0;
`;

const linkWrapper = css`
  display: flex;
  flex-direction: row;
  float: right;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const btnCss = css`
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  margin-left: 1rem;
`;

const oneWordWrapper = css`
  margin-top: 3rem;
`;

const oneWordCss = css`
  font-size: 1.1rem;
  font-weight: ${theme.fontWeight.semiBold};
  letter-spacing: 0.4px;
`;
