import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Gnb from './gnb'
import Footer from './footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Gnb/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
