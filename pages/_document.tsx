import { Html, Head, Main, NextScript } from 'next/document';
import HeadMeta from './headmeta';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <HeadMeta />
      </Head>
      <body>
        <Main />
        <div id='tooltip-root' />
        <NextScript />
      </body>
    </Html>
  );
}
