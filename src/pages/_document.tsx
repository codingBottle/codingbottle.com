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
        <script
          dangerouslySetInnerHTML={{
            __html: `  (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();

ChannelIO('boot', {
  "pluginKey": "${process.env.NEXT_PUBLIC_CHANNELTALK_PLUGIN_KEY}"
});`,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
