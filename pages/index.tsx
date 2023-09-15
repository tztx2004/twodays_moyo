import MainPage from './main';
import Footer from '@/src/components/Footer/Footer';
import { GetServerSidePropsContext } from 'next';

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/plans?page=${pageNumber}`);

  const data = await res.json();

  return { props: { data } };
};
