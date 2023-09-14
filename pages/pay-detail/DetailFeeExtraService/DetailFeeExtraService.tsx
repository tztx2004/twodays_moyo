'use client';
import Image from 'next/image';
import { useRef } from 'react';
import styled from 'styled-components';

interface IDataName {
  [name: string]: string;
}

const dataName: IDataName = {
  micropayment: '소액 결제',
  roaming: '해외 로밍',
  family_combination: '가족 결합',
  mobile_hotSpot: '모바일 핫스팟',
  data_sharing: '데이터 쉐어링',
};

interface IDetailFeeExtraService {
  isSupported: string[];
  isUnSupported: string[];
  plan: Partial<Plan>;
}

export default function DetailFeeExtraService({
  isSupported,
  isUnSupported,
  plan,
}: IDetailFeeExtraService) {
  const SIZE = useRef<number>(22);

  return (
    <WrapperBox>
      <Title>부가 서비스</Title>

      <ContentsBox>
        <ProvideBox>
          <ProvideTitle>지원</ProvideTitle>

          {isSupported.map(data => {
            return (
              <ProvideItemBox key={dataName[data]}>
                <Image
                  src={`/images/${dataName[data].replace(' ', '')}.svg`}
                  alt={`${dataName[data]}`}
                  width={SIZE.current}
                  height={SIZE.current}
                />

                <ProvideContent>
                  <p>{dataName[data]}</p>
                  <p>{plan[data]}</p>
                </ProvideContent>
              </ProvideItemBox>
            );
          })}
        </ProvideBox>

        <NoneProvideBox>
          <NoneProvideTitle>미지원</NoneProvideTitle>
          {isUnSupported.map(data => {
            return (
              <NoneProvideItemBox key={dataName[data]}>
                <Image
                  src={`/images/${dataName[data].replace(' ', '')}.svg`}
                  alt={`${dataName[data].replace(' ', '')}`}
                  width={SIZE.current}
                  height={SIZE.current}
                />
                <p>{dataName[data]}</p>
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

  @media all and (min-width: 480px) and (max-width: 700px) {
    padding: 0 20px;
  }

  @media all and (max-width: 479px) {
    margin: 40px 0 0 0;
    padding: 0 20px;
  }
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
