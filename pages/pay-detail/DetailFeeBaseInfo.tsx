import Image from 'next/image';
import { styled } from 'styled-components';
import { useRef } from 'react';

const baseInfo = [
  {
    icon: '통신사약정',
    title: '통신사 약정',
    content: '없음',
  },
  {
    icon: '일반유심배송',
    title: '일반 유심 배송',
    content: '무료',
    hoverText: 'NFC 기능이 없어도 삼성페이는 사용할 수 있어요',
  },
  {
    icon: '부가통화',
    title: '부가통화',
    content: '300분',
    hoverText: '전국대표번호로 발신하거나 영상통화를 할 때 사용해요',
  },
  {
    icon: 'NFC유심배송',
    title: 'NFC 유심 배송',
    content: '지원 안 함',
    hoverText: '휴대폰을 교통카드로 사용할 수 있어요',
  },
  {
    icon: 'eSIM',
    title: 'eSIM',
    content: '지원 안 함',
    hoverText: 'eSIM은 스마트폰에 내장되어 있으므로 유심을 배송 받지 않아도 돼요',
  },
];

export default function DetailFeeBaseInfo() {
  const SIZE = useRef<number>(28);

  return (
    <WrapperBox>
      <Title>기본 정보</Title>

      <InformationBox>
        {baseInfo.map((info, index) => {
          return (
            <InformationContentBox key={info.content}>
              <Image
                src={`/images/${info.icon}.svg`}
                alt={`${info}`}
                width={SIZE.current}
                height={SIZE.current}
              />

              <InformationText>
                <InformationTitleBox index={index}>
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
  margin-top: 50px;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

const InformationBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
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

const InformationTitleBox = styled.div<{ index: number }>`
  display: flex;
  gap: 5px;
  align-items: end;
  position: relative;
`;

const InformationContent = styled.p`
  color: var(--buttonColor);
  font-weight: 600;
`;