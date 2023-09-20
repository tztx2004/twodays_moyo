import MainPage from './main';
import Footer from '@/src/components/Footer/Footer';
import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_KEY}/plans`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <>
      <MainPage data={data} />
      <Footer />
    </>
  );
}

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   try {
//     const pageNumber = context.query.page || 1;
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/plans?page=1`,{
//       credentials: 'include'
//     });

//     // Check if the response is ok
//     if (!res.ok) {
//       throw new Error(`An error occurred: ${res.status}`);
//     }

//     const data = await res.json();

//     return { props: { data } };
//   } catch (error:any) {
//     console.error("Error in getServerSideProps:", error.message);

//     // Return empty props when an error occurs
//     return { props: {} };
//   }
// };
