import { styled } from 'styled-components';

import useHover from '../../../src/hooks/useHover/useHover';
import QuestionMarker from '../../../src/components/QuestionMarker/QuestionMarker';
import HoverTextBox from '../../../src/components/HoverTextBox/HoverTextBox';

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
        <EmptyDataBox>
          <ExplanationText>소진시</ExplanationText>
          <QuestionMarker onMouseOver={() => mouseHover(1)} onMouseLeave={mouseLeave} />

          {hover ? (
            <HoverTextBoxArea>
              <HoverTextBox>
                <HoverText data-testid='hover-text'>
                  데이터 소진시 유튜브 화질 720p 볼 수 있어요
                </HoverText>
              </HoverTextBox>
            </HoverTextBoxArea>
          ) : null}
        </EmptyDataBox>

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
  font-weight: 900;
  font-size: 1.8rem;
`;

const EmptyDataBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const HoverTextBoxArea = styled.div`
  position: absolute;
  bottom: calc(100% - 150px);
  left: calc(100% - 220px);
`;

const HoverText = styled.p`
  padding: 15px;
  font-weight: 400;
`;
