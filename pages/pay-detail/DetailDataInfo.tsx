import { styled } from 'styled-components';

import useHover from '../hooks/useHover';
import QuestionMarker from '../components/QuestionMarker/QuestionMarker';

export default function DetailDataInfo() {
  const [hover, mouseHover, mouseLeave] = useHover();

  return (
    <WrapperBox>
      <Div>
        <ExplanationText>총 데이터</ExplanationText>
        <EmphasisDataText>71GB</EmphasisDataText>
      </Div>

      <p>=</p>

      <Div>
        <ExplanationText>매월</ExplanationText>
        <DataText>11GB</DataText>
      </Div>

      <p>+</p>

      <Div>
        <ExplanationText>매일</ExplanationText>
        <DataText>2GB</DataText>
      </Div>

      <p>+</p>

      <Div>
        <ExplanationText>소진시</ExplanationText>

        <QuestionMarkerBox>
          <QuestionMarker hover={hover} onMouseOver={() => mouseHover(1)} onMouseLeave={mouseLeave}>
            <HoverText>데이터 소진시 유튜브 화질 720p 볼 수 있어요</HoverText>
          </QuestionMarker>
        </QuestionMarkerBox>
        <DataText>3Mbps</DataText>
      </Div>
    </WrapperBox>
  );
}

const WrapperBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  min-height: 115px;
  border-bottom: 1px solid var(--buttonGray);
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  font-size: 1.2rem;
`;

const ExplanationText = styled.p`
  font-size: 0.8rem;
`;

const DataText = styled.p`
  font-size: 1.8rem;
  font-weight: 900;
`;

const EmphasisDataText = styled.p`
  color: var(--buttonHover);
`;

const QuestionMarkerBox = styled.div`
  position: absolute;
  top: calc(100% - 1012px);
  right: calc(100% - 405px);
`;

const HoverText = styled.p`
  padding: 15px;
`;
