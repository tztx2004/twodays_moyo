'use client';
import Image from 'next/image';
import { styled } from 'styled-components';
import { useRef } from 'react';

export default function DetailFeBaseInfo({
  contractPeriod = 0,
  simDelivery = 0,
  additionCall = '',
  nfcDelivery = 0,
  eSIM = 0,
}) {
  const SIZE = useRef<number>(22);
  const baseInfo = [
    {
      icon: '통신사약정',
      title: '통신사 약정',
      content: `${contractPeriod}개월`,
    },
    {
      icon: '일반유심배송',
      title: '일반 유심 배송',
      content: simDelivery ? '무료' : '지원 안 함',
      hoverText: 'NFC 기능이 없어도 삼성페이는 사용할 수 있어요',
    },
    {
      icon: '부가통화',
      title: '부가통화',
      content: additionCall ? '무료' : '지원 안 함',
      hoverText: '전국대표번호로 발신하거나 영상통화를 할 때 사용해요',
    },
    {
      icon: 'NFC유심배송',
      title: 'NFC 유심 배송',
      content: nfcDelivery ? '무료' : '지원 안 함',
      hoverText: '휴대폰을 교통카드로 사용할 수 있어요',
    },
    {
      icon: 'eSIM',
      title: 'eSIM',
      content: eSIM ? '무료' : '지원 안 함',
      hoverText: 'eSIM은 스마트폰에 내장되어 있으므로 유심을 배송 받지 않아도 돼요',
    },
  ];

  return (
    <WrapperBox>
      <Title>기본 정보</Title>

      <InformationBox>
        {baseInfo.map(info => {
          return (
            <InformationContentBox key={info.title}>
              <Image
                src={`/images/${info.icon}.svg`}
                alt={`${info}`}
                width={SIZE.current}
                height={SIZE.current}
              />

              <InformationText>
                <InformationTitleBox>
                  <p>{info.title}</p>
                </InformationTitleBox>
                <InformationContent>{info.content}</InformationContent>
              </InformationText>
            </InformationContentBox>
          );
        })}
      </InformationBox>
    </WrapperBox>
  );
}

const WrapperBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 80px;

  @media all and (min-width: 480px) and (max-width: 700px) {
    padding: 0 20px;
  }

  @media all and (max-width: 479px) {
    margin: 40px 0 0 0;
    padding: 0 20px;
  }
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

const InformationBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  font-size: 0.9rem;
`;

const InformationContentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InformationText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InformationTitleBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: end;
  position: relative;
`;

const InformationContent = styled.p`
  color: var(--buttonColor);
  font-weight: 600;
`;
