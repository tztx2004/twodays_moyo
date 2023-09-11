import { useState } from 'react';
import MainPage from './main';
import Footer from '@/src/components/Footer/Footer';

export default function Home({data}:any) {
  return (
    <>
      <MainPage data={data} />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (context: any)=>{
  const pageNumber = context.query.page || 1
  const res = await fetch(`http://172.30.1.68:3000/plans?page=${pageNumber}`)
  const data = await res.json()
  
  return {props: {data}}
}