/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Wave() {
  return (
    <div css={wrapper}>
      {/* <div css={boatCss}>
        <Image src={boat} alt="boat" />
      </div> */}
      <div css={ocean}>
        <div css={wave}></div>
        <div css={wave}></div>
      </div>
    </div>
  );
}

const wrapper = css`
  bottom: 0px;
`;

// const boatCss = css`
//   position: absolute;
//   animation: boat 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
//   bottom: 12rem;
// `;

const ocean = css`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #015871;
`;

const wave = css`
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
    repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 9s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);

  :nth-of-type(2) {
    top: -175px;
    animation: wave 9s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  @keyframes boat {
    0% {
      margin-left: 0;
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
    100% {
      margin-left: -1600px;
      transform: translate3d(0, 0px, 0);
    }
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }

  @keyframes swell {
    100% {
      transform: translate3d(0, 0px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
    0% {
      transform: translate3d(0, -25px, 0);
    }
  }
`;
