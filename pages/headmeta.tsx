import Head from 'next/head';

const HeadMeta = () => {
  return (
    <>
      <title>알뜰폰 요금제 | 모요, 모두의 요금제</title>
      <meta
        name='description'
        content={
          '월간 TOP20, 데이터 무제한, 통화 무제한 등 알뜰폰 요금제를 모요에서 가장 쉽고 빠르게 비교하고 찾아보세요'
        }
      />
    </>
  );
};

export default HeadMeta;
