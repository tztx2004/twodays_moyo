import Image from 'next/image';
import { useRef } from 'react';
import styled from 'styled-components';

const provideData = [
  {
    icon: '모바일핫스팟',
    title: '모바일 핫스팟',
    content: '10GB 제공',
  },
  {
    icon: '해외로밍',
    title: '해외로밍',
    content: '신청은 통신사에 문의',
  },
];

const noneProvideData = [
  {
    icon: '가족결합',
    title: '가족 결합',
  },
  {
    icon: '소액결제',
    title: '소액결제',
  },
  {
    icon: '데이터쉐어링',
    title: '데이터 쉐어링',
  },
];

export default function DetailFeeExtraService() {
  const SIZE = useRef<number>(22);

  return (
    <WrapperBox>
      <Title>부가 서비스</Title>

      <ContentsBox>
        <ProvideBox>
          <ProvideTitle>지원</ProvideTitle>

          {provideData.map(data => {
            return (
              <ProvideItemBox key={data.title}>
                <Image
                  src={`/images/${data.icon}.svg`}
                  alt={`${data.icon}`}
                  width={SIZE.current}
                  height={SIZE.current}
                />

                <ProvideContent>
                  <p>{data.title}</p>
                  <p>{data.content}</p>
                </ProvideContent>
              </ProvideItemBox>
            );
          })}
        </ProvideBox>

        <NoneProvideBox>
          <NoneProvideTitle>미지원</NoneProvideTitle>
          {noneProvideData.map(data => {
            return (
              <NoneProvideItemBox key={data.title}>
                <Image
                  src={`/images/${data.icon}.svg`}
                  alt={`${data.icon}`}
                  width={SIZE.current}
                  height={SIZE.current}
                />
                <p>{data.title}</p>
              </NoneProvideItemBox>
            );
          })}
        </NoneProvideBox>
      </ContentsBox>
    </WrapperBox>
  );
}

const WrapperBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 25px;
`;

const ContentsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  font-size: 0.9rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

const ProvideBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProvideTitle = styled.p`
  font-weight: 600;
`;

const ProvideItemBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ProvideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p:nth-of-type(2) {
    color: var(--buttonColor);
  }
`;

const NoneProvideBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NoneProvideItemBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--fontLightGray);
`;

const NoneProvideTitle = styled.p`
  font-weight: 600;
`;
