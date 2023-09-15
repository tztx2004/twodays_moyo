'use client';
import { styled } from 'styled-components';

import useHover from '../../../src/hooks/useHover/useHover';
import QuestionMarker from '../../../src/components/InfoMarker/InfoMarker';
import HoverTextBox from '../../../src/components/HoverTextBox/HoverTextBox';

export default function DetailFee({ originalPrice = 0, period = 0, discountPrice = 0 }) {
  const [hover, mouseOver, mouseLeave] = useHover();

  return (
    <WrapperBox>
      <WrongInfo>잘못된 정보 제보</WrongInfo>

      <InnerBox>
        <MonthFeeBox>
          <QuestionMarker onMouseOver={() => mouseOver(1)} onMouseLeave={mouseLeave} />
          <MonthFeeContent>{`월 ${discountPrice.toLocaleString()}원`}</MonthFeeContent>

          {hover ? (
            <HoverTextBoxArea>
              <HoverTextBox>
                <HoverTextContent data-testid='hover-text'>
                  <TopText>{hoverTopPhrases(period)}</TopText>

                  <BottomText>
                    <BottomLeftText>
                      <p>12개월 사용 시</p>
                      <p>{`총 ${periodPrice(
                        period,
                        originalPrice,
                        discountPrice,
                        12,
                      ).toLocaleString()}원`}</p>
                    </BottomLeftText>

                    <BottomRightText>
                      <p>24개월 사용 시</p>
                      <p>{`총 ${periodPrice(
                        period,
                        originalPrice,
                        discountPrice,
                        24,
                      ).toLocaleString()}원`}</p>
                    </BottomRightText>
                  </BottomText>
                </HoverTextContent>
              </HoverTextBox>
            </HoverTextBoxArea>
          ) : null}
        </MonthFeeBox>

        <ExtraFeeInfoText>{salePhrases(period, originalPrice)}</ExtraFeeInfoText>
      </InnerBox>

      <ApplyBtn>신청하기</ApplyBtn>
    </WrapperBox>
  );
}

const periodPrice = (period = 0, originalPrice = 0, discountPrice = 0, totalPeriod = 0): number => {
  if (period === 999999) return discountPrice * totalPeriod;

  return discountPrice * period + (totalPeriod - period) * originalPrice;
};

const hoverTopPhrases = (period: number) => {
  switch (period) {
    case 999999:
      return `평생 위약금이 발생하지 않는 요금제에요.`;
    case 0:
      return `할인이 없는 요금제에요.`;
    default:
      return `${period}개월까지만 사용해도 위약금이 발생하지 않아요`;
  }
};

const salePhrases = (period: number, originalPrice: number) => {
  switch (period) {
    case 999999:
      return `기존 ${originalPrice.toLocaleString()}원`;
    case 0:
      return ``;
    default:
      return `${period}개월 이후 ${originalPrice.toLocaleString()}원`;
  }
};

const WrapperBox = styled.section`
  color: var(--fontColor);

  @media all and (min-width: 480px) and (max-width: 700px) {
    margin-top: 50px;
    padding: 0 20px;
  }

  @media all and (max-width: 479px) {
    position: fixed;
    background-color: white;
    width: 100%;
    z-index: 2;
    display: flex;
    min-height: 90px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-top: 1px solid #f1f3f5;
    bottom: calc(51px);
  }
`;

const WrongInfo = styled.span`
  font-size: 0.8rem;
  color: var(--fontGray);
  text-decoration: underline;
  cursor: pointer;

  @media all and (max-width: 479px) {
    text-align: center;
    font-size: 0.9rem;
    width: 70px;
  }
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
  align-items: center;
  gap: 5px;
`;

const MonthFeeContent = styled.p`
  color: var(--buttonHover);
  font-size: 1.5rem;
  font-weight: 600;

  @media all and (max-width: 479px) {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const HoverTextBoxArea = styled.div`
  position: absolute;
  top: calc(100% - 175px);
  left: calc(100% - 298px);

  @media all and (max-width: 479px) {
    top: calc(100% - 190px);
    left: calc(100% - 190px);
    & > div {
      &::before {
        left: 25%;
      }
    }
  }
`;

const HoverTextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const TopText = styled.p`
  margin-bottom: 15px;
`;

const BottomText = styled.div`
  display: flex;
  justify-content: space-between;
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

const ExtraFeeInfoText = styled.p`
  @media all and (max-width: 479px) {
    width: 115px;
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

  @media all and (max-width: 479px) {
    width: 40%;
    margin: 0 0 0 2.5%;
  }
`;
