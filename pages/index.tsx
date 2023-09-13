import { useState } from 'react';
import MainPage from './main';
import Footer from '@/src/components/Footer/Footer';
import { GetServerSidePropsContext } from 'next';
import { Idata } from './main/type';

export default function Home({ data }: Idata) {
  return (
    <>
      <MainPage data={data} />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const pageNumber = context.query.page || 1;
  const res = await fetch(`http://172.30.1.68:3000/plans?page=${pageNumber}&items-per-page=5`);
  const data = await res.json();

  return { props: { data } };
};
