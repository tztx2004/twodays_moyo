import { Html, Head, Main, NextScript } from 'next/document';
import Gnb from './gnb';
import HeadMeta from './headmeta';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <HeadMeta />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
