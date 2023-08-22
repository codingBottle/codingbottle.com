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
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0;
`;

const navLogo = css`
  padding-left: 2rem;
`;

const navList = css`
  padding-right: 1rem;
`;

const navItem = css`
  margin: 0 1rem;
  font-size: 0.97rem;
  font-weight: ${theme.fontWeight.light};
`;
