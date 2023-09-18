'use client';
import InfoMarker from '@/src/components/InfoMarker/InfoMarker';
import Tooltip from '@/src/components/Tooltip/Tooltip';
import Image from 'next/image';
import { useRef } from 'react';
import styled from 'styled-components';

interface IData {
  title: string;
  space: boolean;
  hoverText: string;
  width: string;
}

interface IDataName {
  [name: string]: IData;
}

const dataName: IDataName = {
  micropayment: {
    title: '소액 결제',
    space: false,
    hoverText:
      '온라인에서 상품을 구매할 때 휴대폰으로 결제할 수 있어요. 결제 금액은 다음 달 휴대폰 요금제 부과돼요',
    width: '330px',
  },
  roaming: {
    title: '해외 로밍',
    space: true,
    hoverText: '해외에서도 내 번호를 그대로 사용할 수 있어요',
    width: 'auto',
  },
  family_combination: {
    title: '가족 결합',
    space: true,
    hoverText: '휴대폰과 인터넷 결합시, 각각 요금을 할인받을 수 있어요',
    width: 'auto',
  },
  mobile_hotSpot: {
    title: '모바일 핫스팟',
    space: true,
    hoverText: '휴대폰을 와이파이 공유기로 사용할 수 있어요',
    width: 'auto',
  },
  data_sharing: {
    title: '데이터 쉐어링',
    space: true,
    hoverText: '데이터를 다른 기기와 함께 사용할 수 있어요',
    width: 'auto',
  },
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

          {isSupported?.map(data => {
            return (
              <ProvideItemBox key={dataName[data].title}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/${dataName[data].title.replace(
                    ' ',
                    '',
                  )}.svg`}
                  alt={`${dataName[data].title}`}
                  width={SIZE.current}
                  height={SIZE.current}
                />

                <ProvideContent>
                  <ProvideContentTitle>
                    <p>{dataName[data].title}</p>
                    <Tooltip
                      Marker={InfoMarker}
                      width={dataName[data].width}
                      position={20}
                      space={dataName[data].space}
                    >
                      <p>{dataName[data].hoverText}</p>
                    </Tooltip>
                  </ProvideContentTitle>
                  <p>{plan[data]}</p>
                </ProvideContent>
              </ProvideItemBox>
            );
          })}
        </ProvideBox>

        <NoneProvideBox>
          <NoneProvideTitle>미지원</NoneProvideTitle>
          {isUnSupported?.map(data => {
            return (
              <NoneProvideItemBox key={dataName[data].title}>
                <Image
                  src={`/images/${dataName[data].title.replace(' ', '')}.svg`}
                  alt={`${dataName[data].title.replace(' ', '')}`}
                  width={SIZE.current}
                  height={SIZE.current}
                />

                <ProvideContentTitle>
                  <p>{dataName[data].title}</p>
                  <Tooltip
                    Marker={InfoMarker}
                    width={dataName[data].width}
                    position={70}
                    space={dataName[data].space}
                  >
                    <p>{dataName[data].hoverText}</p>
                  </Tooltip>
                </ProvideContentTitle>
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

const ProvideContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
