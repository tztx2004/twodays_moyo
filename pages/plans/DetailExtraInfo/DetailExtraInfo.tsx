'use client';
import { styled } from 'styled-components';

export default function DetailExtraInfo({
  authMethod = '',
  underAge = 0,
  foreigner = 0,
  transferCharge = 0,
  videoPrice = 0,
  callPrice = 0,
  LMS = 0,
  MMSImg = 0,
  MMSVideo = 0,
}) {
  const extraInfoData = [
    {
      title: '가입시 인증 방법',
      content: authMethod,
    },
    {
      title: '미성년자 가입',
      content: underAge ? '온라인 신청 가능' : '미지원',
    },
    {
      title: '외국인 가입',
      content: foreigner ? foreigner : '미지원',
    },
    {
      title: '번호이동 수수료',
      content: transferCharge ? `${transferCharge}원` : '없음',
    },
  ];

  const extraFeeData = [
    {
      title: '영상 통화',
      value: `${videoPrice}원/초`,
    },
    {
      title: '부가 통화',
      value: `${callPrice}원/초`,
    },
    {
      title: '긴 문자',
      value: `${LMS}원/개`,
    },
    {
      title: '사진 포함 긴 문자',
      value: `${MMSImg}원/개`,
    },
    {
      title: '영상 포함 긴 문자',
      value: `${MMSVideo}원/초`,
    },
  ];

  return (
    <WrapperBox>
      <Title>기타 정보</Title>
      {extraInfoData.map(data => {
        return (
          <Contents key={data.title}>
            <ContentsTitle>{data.title}</ContentsTitle>
            <p>{data.content}</p>
          </Contents>
        );
      })}

      <OverUseText>기본 제공 초과 시</OverUseText>

      <TableBox>
        {extraFeeData.map((data, index: number) => {
          return (
            <TableContents key={data.title}>
              <TableTitle $index={index}>{data.title}</TableTitle>
              <TableValue>{data.value}</TableValue>
            </TableContents>
          );
        })}
      </TableBox>

      <NoticeText>
        통화 또는 문자 제공량이 무제한이더라도 과도한 사용이 있을 경우 사용량 제한이 있을 수 있어요.
      </NoticeText>
    </WrapperBox>
  );
}

const WrapperBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 30px;
  margin-bottom: 250px;

  @media all and (min-width: 480px) and (max-width: 700px) {
    padding: 0 20px;
  }

  @media all and (max-width: 479px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  @media all and (max-width: 479px) {
    grid-template-columns: 130px 1fr;
    font-size: 0.8rem;
  }
`;

const ContentsTitle = styled.p`
  font-weight: 400;
  color: var(--fontGray);
`;

const OverUseText = styled.p`
  font-weight: 600;

  @media all and (max-width: 479px) {
    font-size: 0.9rem;
  }
`;

const TableBox = styled.div`
  display: flex;

  @media all and (min-width: 480px) and (max-width: 700px) {
    flex-wrap: wrap;
  }

  @media all and (max-width: 479px) {
    flex-wrap: wrap;
  }
`;

const TableContents = styled.div`
  min-height: 45px;
  display: inline-block;
  min-width: 100px;

  @media all and (max-width: 479px) {
    min-width: auto;
    flex: 0 1 30%;
    white-space: nowrap;
  }
`;

const Radius = 8;

const TableTitle = styled.p<{ $index: number }>`
  background-color: var(--buttonGray);
  padding: 8px 16px;
  border-radius: ${props =>
    props.$index === 0
      ? `${Radius}px 0 0 ${Radius}px`
      : props.$index === 4
      ? `0 ${Radius}px ${Radius}px 0`
      : '0'};

  font-size: 0.875rem;
  color: var(--fontColor);
  text-align: center;
`;

const TableValue = styled.p`
  padding: 8px 16px;
  text-align: center;
  color: var(--fontColor);
  font-size: 0.875rem;
`;

const NoticeText = styled.p`
  font-size: 0.8rem;
  color: var(--fontGray);

  @media all and (max-width: 479px) {
    font-size: 0.73rem;
  }
`;
