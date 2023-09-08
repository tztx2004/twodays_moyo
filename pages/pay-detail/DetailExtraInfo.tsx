import { styled } from 'styled-components';

const tmpData = [
  {
    title: '가입시 인증 방법',
    content: '네이버인증, 신용카드 인증',
  },
  {
    title: '미성년자 가입',
    content: '온라인 신청 가능',
  },
  {
    title: '외국인 가입',
    content: '미지원',
  },
  {
    title: '번호이동 수수료',
    content: '없음',
  },
];

const tableData = [
  {
    title: '영상 통화',
    value: '3.3원/초',
  },
  {
    title: '부가 통화',
    value: '1.98원/초',
  },
  {
    title: '긴 문자',
    value: '33원/개',
  },
  {
    title: '사진 포함 긴 문자',
    value: '220원/개',
  },
  {
    title: '영상 포함 긴 문자',
    value: '3.3원/초',
  },
];

export default function DetailExtraInfo() {
  return (
    <WrapperBox>
      <Title>기타 정보</Title>
      {tmpData.map(data => {
        return (
          <Contents key={data.title}>
            <ContentsTitle>{data.title}</ContentsTitle>
            <p>{data.content}</p>
          </Contents>
        );
      })}

      <OverUseText>기본 제공 초과 시</OverUseText>

      <TableBox>
        {tableData.map((data, index) => {
          return (
            <TableContents key={data.title}>
              <TableTitle index={index}>{data.title}</TableTitle>
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
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

const ContentsTitle = styled.p`
  font-weight: 400;
  color: var(--fontGray);
`;

const OverUseText = styled.p`
  font-weight: 600;
`;

const TableBox = styled.div`
  display: flex;
`;

const TableContents = styled.div`
  min-height: 45px;
  display: inline-block;
  min-width: 100px;
`;

const Radius = 8;

const TableTitle = styled.p<{ index: number }>`
  background-color: var(--buttonGray);
  padding: 8px 16px;
  border-radius: ${props =>
    props.index === 0
      ? `${Radius}px 0 0 ${Radius}px`
      : props.index === 4
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
`;
