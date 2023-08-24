/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import DeveloperCard from "components/card/developerCard";
import SectionAbout from "components/text/sectionAbout";

export default function Team() {
  return (
    <section css={wrapper}>
      <SectionAbout title="Team" subTitle="WEB & SERVER & MOBILE & DESIGN" />
      <DeveloperCard />
    </section>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`;
