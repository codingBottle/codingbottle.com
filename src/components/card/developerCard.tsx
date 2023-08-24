/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import boat from "assets/lottieJSON/boat.json";
import cc from "classcat";
import LottieWrapper from "components/lottieWrapper";
import EachTeam from "components/team/eachTeam";
import {
  DESIGN_NOTION,
  DESIGN_ONEWORD,
  DESIGN_TODO,
  MOBILE_NOTION,
  MOBILE_ONEWORD,
  MOBILE_TODO,
  SERVER_NOTION,
  SERVER_ONEWORD,
  SERVER_TODO,
  WEB_NOTION,
  WEB_ONEWORD,
  WEB_TODO,
} from "constants/part";
import { useTabs } from "hooks/useTabs";
import theme from "styles/theme/theme";

const partList = [
  {
    type: "WEB",
    emoji: "🧑🏻‍💻",
    part: "WEB",
    partName: WEB_TODO,
    oneWord: WEB_ONEWORD,
    notion: WEB_NOTION,
  },
  {
    type: "SERVER",
    emoji: "🌊",
    part: "SERVER",
    partName: SERVER_TODO,
    oneWord: SERVER_ONEWORD,
    notion: SERVER_NOTION,
  },
  {
    type: "MOBILE",
    emoji: "👻",
    part: "MOBILE",
    partName: MOBILE_TODO,
    oneWord: MOBILE_ONEWORD,
    notion: MOBILE_NOTION,
  },
  {
    type: "DESIGN",
    emoji: "❤️‍🔥",
    part: "DESIGN",
    partName: DESIGN_TODO,
    oneWord: DESIGN_ONEWORD,
    notion: DESIGN_NOTION,
  },
];

export default function DeveloperCard() {
  const { currentTab, changeTab } = useTabs(partList[0], partList);
  const handleClick = (tab: string) => {
    changeTab(tab);
  };

  return (
    <div css={cardCss}>
      <div css={navCss}>
        <div css={lottieWrapper}>
          <LottieWrapper lottieData={boat} />
        </div>
        <ul css={navPart}>
          {partList.map(({ type }) => {
            return (
              <li
                onClick={() => handleClick(type)}
                key={type}
                css={navLi}
                className={cc([currentTab.type === type && "selected"])}
              >
                | {type} |
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <article>
          <div>
            <EachTeam
              emoji={currentTab.emoji}
              part={currentTab.part}
              partName={currentTab.partName}
              oneWord={currentTab.oneWord}
              notion={currentTab.notion}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

const cardCss = css`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  background-color: rgba(255, 255, 255, 0.09);
  width: 90%;
  min-height: 25rem;
  height: auto;
  overflow: hidden;
`;

const navCss = css`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 0.5rem;
`;

const navPart = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const navLi = css`
  all: unset;
  cursor: pointer;
  white-space: nowrap;
  opacity: 0.2;
  font-weight: ${theme.fontWeight.normal};
  margin-right: 0.3rem;

  &.selected {
    font-weight: ${theme.fontWeight.semiBold};
    color: #408ab2;
    opacity: 1;
  }

  @media (max-width: 380px) {
    font-size: 0.9rem;
  }
`;

const lottieWrapper = css`
  width: 10%;
`;
