import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Gnb from './gnb';
import Footer from './footer';

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === 'development') {
    if (typeof window === 'undefined') {
      (async () => {
        const { server } = await import('./mocks/server');
        server.listen();
      })();
    } else {
      (async () => {
        const { worker } = await import('./mocks/browser');
        worker.start();
      })();
    }
  }

  return (
    <>
      <Gnb />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
