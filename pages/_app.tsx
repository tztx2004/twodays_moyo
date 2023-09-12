import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Gnb from '../src/components/Gnb/Gnb';
import { MSWComponent } from '@/src/mocks/MSWComponent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MSWComponent>
        <Gnb />
        <Component {...pageProps} />
      </MSWComponent>
    </>
  );
}
