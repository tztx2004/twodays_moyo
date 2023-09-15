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
  const res = await fetch(
    `https://port-0-bee-smart-4fju66f2clmj8oy00.sel5.cloudtype.app/plans?page=1`,
  );
  const data = await res.json();

  return { props: { data } };
};
