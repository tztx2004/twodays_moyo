import styled from 'styled-components';

import InfoMarker from '@/src/components/InfoMarker/InfoMarker';

export default function DetailJoiningCondition({ requirement = '' }) {
  return (
    <WapperBox>
      <TitleBox>
        <InfoMarker bg='#FA5252' text='!' />
        <Title>요금제 가입 조건</Title>
      </TitleBox>

      <ContentsBox>
        <p>•</p>
        <Content>{requirement}</Content>
      </ContentsBox>
    </WapperBox>
  );
}

const WapperBox = styled.section`
  width: auto;
  height: 100px;
  border: 1px solid var(--fontLightGray);
  border-radius: 15px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  gap: 15px;

  @media all and (max-width: 700px) {
    margin: 30px 20px 0 20px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--fontColor);
`;

const ContentsBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Content = styled.p`
  font-size: 0.9rem;
  color: var(--fontColor);
`;
