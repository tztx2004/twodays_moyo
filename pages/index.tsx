import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import MainPage from './main/main'
import Gnb from './gnb'



export default function Home() {
  return (
    <>
      <Gnb/>
      <MainPage/>
    </>
  )
}
