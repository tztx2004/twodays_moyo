import { useRef } from 'react';
import { GoShare } from 'react-icons/go';
import { styled } from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

import Tag from '../../../src/components/Tag/Tag';
import useHover from '../../../src/hooks/useHover/useHover';
import HoverTextBox from '../../../src/components/HoverTextBox/HoverTextBox';

export default function DetailTitle({ title = '요금제 이름', userNum = 0 }) {
  const SIZE = useRef<number>(23);
  const [hover, mouseOver, mouseLeave] = useHover();

  return (
    <WrapperBox>
      <TagBox>
        <Tag title='모요개통' onMouseOver={() => mouseOver(1)} onMouseLeave={mouseLeave} />

        <Tag
          title='모요ONLY'
          color='#425ad5'
          onMouseOver={() => mouseOver(2)}
          onMouseLeave={mouseLeave}
        />
      </TagBox>

      <PlanName data-testid='title'>{title}</PlanName>

      <AdditionalInfoBox>
        <NumberOfSubscribers>{`${userNum.toLocaleString()}명이 선택`}</NumberOfSubscribers>

        <LikeAndShareBtnBox>
          <LikeAndShareBtn>
            <AiOutlineHeart size={SIZE.current} />
            <ButtonText>찜</ButtonText>
          </LikeAndShareBtn>
          <LikeAndShareBtn>
            <GoShare size={SIZE.current} />
            <ButtonText>공유</ButtonText>
          </LikeAndShareBtn>
        </LikeAndShareBtnBox>
      </AdditionalInfoBox>

      <FirstHoverTextBox>
        {hover === 1 ? (
          <HoverTextBox>
            <HoverText>상담사를 기다리지 않고 직접 개통할 수 있어요.</HoverText>
          </HoverTextBox>
        ) : null}
      </FirstHoverTextBox>

      <SecondHoverTextBox>
        {hover === 2 ? (
          <HoverTextBox>
            <HoverText>BeeSmart에서만 할인된 가격이나 혜택으로 개통할 수 있어요!</HoverText>
          </HoverTextBox>
        ) : null}
      </SecondHoverTextBox>
    </WrapperBox>
  );
}

const WrapperBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  border-bottom: 1px solid var(--buttonGray);
  min-height: 130px;

  @media all and (min-width: 480px) and (max-width: 700px) {
    padding: 0 20px;
    border: 0;
  }

  @media all and (max-width: 479px) {
    padding: 0 20px;
    border: 0;
  }
`;

const TagBox = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PlanName = styled.p`
  font-size: 1.5rem;
  font-weight: 900;

  @media all and (max-width: 479px) {
    font-size: 1.2rem;
  }
`;

const AdditionalInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberOfSubscribers = styled.p`
  color: #9298a0;

  @media all and (max-width: 479px) {
    font-size: 0.8rem;
  }
`;

const LikeAndShareBtnBox = styled.div`
  display: flex;
  gap: 2rem;
  color: #495057;
  margin: 0;

  @media all and (max-width: 479px) {
    margin-top: 20px;
    gap: 1rem;
  }
`;

const LikeAndShareBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const ButtonText = styled.p`
  @media all and (max-width: 479px) {
    display: none;
  }
`;

const FirstHoverTextBox = styled.div`
  position: absolute;
  width: auto;
  bottom: calc(100% + 15px);
  right: calc(100% - 185px);
  z-index: 1000;

  @media all and (min-width: 768px) and (max-width: 1023px) {
    bottom: calc(100% + 15px);
    right: calc(100% - 260px);
    & > div {
      &::before {
        left: 25%;
      }
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    bottom: calc(100% + 15px);
    right: calc(100% - 275px);
    & > div {
      &::before {
        left: 20%;
      }
    }
  }

  @media all and (min-width: 480px) and (max-width: 700px) {
    bottom: calc(100% + 15px);
    right: calc(100% - 325px);
    & > div {
      &::before {
        left: 10%;
      }
    }
  }

  @media all and (max-width: 479px) {
    bottom: calc(100% + 15px);
    right: calc(100% - 265px);
    & > div {
      font-size: 0.75rem;
      &::before {
        left: 15%;
      }
    }
  }
`;

const SecondHoverTextBox = styled.div`
  position: absolute;
  bottom: calc(100% + 15px);
  right: calc(100% - 300px);
  z-index: 1000;

  @media all and (min-width: 480px) and (max-width: 767px) {
    bottom: calc(100% + 15px);
    right: calc(100% - 400px);
    & > div {
      &::before {
        left: 25%;
      }
    }
  }

  @media all and (min-width: 480px) and (max-width: 700px) {
    bottom: calc(100% + 15px);
    right: calc(100% - 420px);
  }

  @media all and (max-width: 479px) {
    bottom: calc(100% + 15px);
    right: calc(100% - 365px);
    & > div {
      font-size: 0.75rem;
      white-space: normal;
      &::before {
        left: 25%;
      }
    }
  }
`;

const HoverText = styled.p`
  padding: 15px;
`;
