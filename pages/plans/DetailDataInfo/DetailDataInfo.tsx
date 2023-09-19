'use client';
import { styled } from 'styled-components';

import Tooltip from '@/src/components/Tooltip/Tooltip';
import InfoMarker from '@/src/components/InfoMarker/InfoMarker';

interface IDetailDataInfo {
  monthData: number;
  dailyData: number | null;
  exhaustedData: number | null;
}

export default function DetailDataInfo({ monthData, dailyData, exhaustedData }: IDetailDataInfo) {
  return (
    <WrapperBox>
      <Div>
        <ExplanationText>총 데이터</ExplanationText>
        <EmphasisDataText>{`${addData(monthData, dailyData)}GB`}</EmphasisDataText>
      </Div>

      <p>=</p>

      <Div>
        <ExplanationText>매월</ExplanationText>
        <DataText>{`${monthData}GB`}</DataText>
      </Div>

      {dailyData ? <p>+</p> : <p></p>}

      {dailyData ? (
        <Div>
          <ExplanationText>매일</ExplanationText>
          <DataText>{`${dailyData}GB`}</DataText>
        </Div>
      ) : null}

      {exhaustedData ? <p>+</p> : <p></p>}

      {exhaustedData ? (
        <Div>
          <EmptyDataBox>
            <ExplanationText>소진시</ExplanationText>

            <Tooltip Marker={InfoMarker} width='260px'>
              <TooltipText>데이터 소진시 유튜브 화질 720p 볼 수 있어요</TooltipText>
            </Tooltip>
          </EmptyDataBox>

          <DataText>{`${exhaustedData}Mbps`}</DataText>
        </Div>
      ) : null}
    </WrapperBox>
  );
}

const addData = (month = 0, daily: number | null) => {
  if (!daily) return month;

  return month + daily * 30;
};

const WrapperBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  min-height: 115px;
  width: 100%;
  border-bottom: 1px solid var(--buttonGray);

  @media all and (min-width: 480px) and (max-width: 700px) {
    gap: 1.4rem;
    border: 0;
  }

  @media all and (max-width: 479px) {
    gap: 1.4rem;
    border: 0;
    min-height: 80px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  font-size: 1.2rem;

  @media all and (max-width: 479px) {
    gap: 5px;
  }
`;

const ExplanationText = styled.p`
  font-size: 0.8rem;

  @media all and (max-width: 479px) {
    font-size: 0.7rem;
    font-weight: 400;
  }
`;

const DataText = styled.p`
  font-size: 1.8rem;
  font-weight: 900;

  @media all and (max-width: 479px) {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const EmphasisDataText = styled.p`
  color: var(--buttonHover);
  font-weight: 900;
  font-size: 1.8rem;

  @media all and (max-width: 479px) {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const EmptyDataBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TooltipText = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
`;
