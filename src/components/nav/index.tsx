/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { nav } from "constants/nav";
import Link from "next/link";
import theme from "styles/theme/theme";

export default function Nav() {
  return (
    <nav css={navCss}>
      <Link href="/">
        <h1 css={navLogo}>
          로고
          {/* <Image src="" alt="logo" /> */}
        </h1>
      </Link>
      <div css={navList}>
        {nav.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            style={{
              textDecoration: "none",
              color: "white",
            }}
            passHref
          >
            <span css={navItem}>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

const navCss = css`
  position: sticky;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;

  @media (max-width: 380px) {
    padding: 1rem 0.9rem;
  }
`;

const navLogo = css``;

const navList = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
`;

const navItem = css`
  font-size: 0.9rem;
  font-weight: ${theme.fontWeight.light};
`;
