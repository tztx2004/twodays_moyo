import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import MainPage from './main';
import Gnb from './gnb';
import Footer from './footer';

export default function Home() {
  return (
    <>
      <MainPage />
    </>
  );
}
