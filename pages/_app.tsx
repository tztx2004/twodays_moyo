import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Gnb from '../src/components/Gnb/Gnb';


if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    (async () => {
      const { server } = await import('../src/mocks/server');
      server.listen();
    })();
  } else {
    (async () => {
      const { worker } = await import('../src/mocks/browser');
      worker.start();
    })();
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Gnb />
      <Component {...pageProps} />
    </>
  );
}
