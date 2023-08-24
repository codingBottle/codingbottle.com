/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import DetailTag from "components/detailTag";
import SectionAbout from "components/text/sectionAbout";
import { faq } from "constants/faq";

export default function Faq() {
  return (
    <section css={wrapper}>
      <SectionAbout title="FAQ" subTitle="여기까지 오셨다면 들어오세요." />
      {faq.map((item) => (
        <DetailTag
          key={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </section>
  );
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0rem;
`;
