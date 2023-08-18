import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <meta
          name="keywords"
          content="코딩보틀, 개발, 디자인, 성공회대, 동아리, 항해, 개발자"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
