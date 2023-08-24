/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import personBoat from "assets/lottieJSON/personBoat.json";
import LottieWrapper from "components/lottieWrapper";
import Point from "components/text/point";
import SectionAbout from "components/text/sectionAbout";

export default function About() {
  return (
    <section css={wrapper}>
      <div css={itemWrapper}>
        <SectionAbout
          title="What is codingBottle?"
          subTitle="더 멀리 항해하자, 코딩보틀!"
        />
        <div>
          <LottieWrapper lottieData={personBoat} />
        </div>
      </div>
      <Point
        title="6개월 동안 진행!"
        content="🎓 24년 졸업 예정자도 문제 없어요"
      />
      <div css={rightWrapper}>
        <Point
          title="멋진 사람들과 함께"
          content="열정있는 사람들이 모여 만들어졌어요 ❤️‍🔥"
        />
      </div>
      <div css={marginWrapper}>
        <Point
          title="넓은 경험"
          content="🎨디자이너와 🧑🏻‍💻개발자가 함께 협업해요"
        />
      </div>
      <div css={rightWrapper}>
        <Point
          title="좋은 경험, 좋은 추억!"
          content="해커톤, 컨퍼런스 등 유익한 경험 같이해요 🏆"
        />
      </div>
    </section>
  );
}

const wrapper = css`
  height: 320rem;
  width: 100%;
  margin-bottom: 20rem;
`;

const itemWrapper = css`
  position: sticky;
  top: 40px;

  @media (max-width: 380px) {
    top: 35px;
  }
`;

const rightWrapper = css`
  float: right;
  margin-top: 45rem;
`;

const marginWrapper = css`
  margin-top: 80rem;
`;
