import { styled } from 'styled-components';

import useHover from '../hooks/useHover';
import QuestionMarker from '../components/QuestionMarker/QuestionMarker';

export default function DetailFee() {
  const [hover, mouseOver, mouseLeave] = useHover();

  return (
    <WrapperBox>
      <WrongInfo>잘못된 정보 제보</WrongInfo>

      <InnerBox>
        <MonthFeeBox>
          <QuestionMarkerBox>
            <QuestionMarker
              hover={hover}
              onMouseOver={() => mouseOver(1)}
              onMouseLeave={mouseLeave}
            >
              <HoverTextBoxInner>
                <TopText>12개월까지만 사용해도 위약금이 발생하지 않아요</TopText>

                <HoverTextBoxContent>
                  <BottomLeftText>
                    <p>12개월 사용 시</p>
                    <p>총 309,480원</p>
                  </BottomLeftText>

                  <BottomRightText>
                    <p>24개월 사용 시</p>
                    <p>총 765,480원</p>
                  </BottomRightText>
                </HoverTextBoxContent>
              </HoverTextBoxInner>
            </QuestionMarker>
          </QuestionMarkerBox>

          <MonthFeeContent>월 25,790원</MonthFeeContent>

          <p>12개월 이후 38,000원</p>
        </MonthFeeBox>
      </InnerBox>

      <ApplyBtn>신청하기</ApplyBtn>
    </WrapperBox>
  );
}

const WrapperBox = styled.section`
  color: var(--fontColor);
`;

const WrongInfo = styled.p`
  font-size: 0.8rem;
  color: var(--fontGray);
  text-decoration: underline;
  cursor: pointer;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  gap: 10px;

  & > div:nth-of-type(2) {
    position: absolute;
    top: calc(100% - 175px);
    left: calc(100% - 293px);
    padding: 15px;
  }
`;

const MonthFeeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 5px;
`;

const QuestionMarkerBox = styled.div`
  position: absolute;
  top: calc(100% - 170px);
  right: calc(100% - 330px);
`;

const MonthFeeContent = styled.p`
  color: var(--buttonHover);
  font-size: 1.5rem;
  font-weight: 600;
`;

const HoverTextBoxInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const HoverTextBoxContent = styled.div`
  display: flex;
  gap: 30px;
`;

const TopText = styled.p`
  margin-bottom: 15px;
`;

const BottomLeftText = styled.div`
  p:nth-of-type(1) {
    color: var(--fontGray);
    margin-bottom: 5px;
  }
  p:nth-of-type(2) {
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const BottomRightText = styled.div`
  p:nth-of-type(1) {
    color: var(--fontGray);
    margin-bottom: 5px;
  }
  p:nth-of-type(2) {
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const ApplyBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  background-color: var(--buttonColor);
  border: 0;
  border-radius: 10px;
  height: 50px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
`;
