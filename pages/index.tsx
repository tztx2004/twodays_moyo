import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';


import Gnb from './gnb';
import Footer from './footer';
import MainPage from './main';

export default function Home() {
  return (
    <>
      <MainPage />
    </>
  );
}
