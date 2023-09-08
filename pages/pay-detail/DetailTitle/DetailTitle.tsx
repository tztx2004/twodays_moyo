import { useRef } from 'react';
import { GoShare } from 'react-icons/go';
import { AiOutlineHeart } from 'react-icons/ai';

import useHover from '../../hooks/useHover/useHover';
import HoverTextBox from '../../components/HoverTextBox/HoverTextBox';
import Tag from '../../components/Tag/Tag';
import { styled } from 'styled-components';

export default function DetailTitle() {
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

      <PlanName data-testid='title'>[모요only] 슈가매니아 11GB+매일2GB+</PlanName>

      <AdditionalInfoBox>
        <NumberOfSubscribers>44,966명이 선택</NumberOfSubscribers>

        <LikeAndShareBtnBox>
          <LikeAndShareBtn>
            <AiOutlineHeart size={SIZE.current} />
            <p>찜</p>
          </LikeAndShareBtn>
          <LikeAndShareBtn>
            <GoShare size={SIZE.current} />
            <p>공유</p>
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
`;

const TagBox = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PlanName = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
`;

const AdditionalInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberOfSubscribers = styled.p`
  color: #9298a0;
`;

const LikeAndShareBtnBox = styled.div`
  display: flex;
  gap: 2rem;
  color: #495057;
  margin: 0;
`;

const LikeAndShareBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const FirstHoverTextBox = styled.div`
  position: absolute;
  bottom: calc(100% + 15px);
  width: auto;
  right: calc(100% - 185px);
  z-index: 1000;
`;

const SecondHoverTextBox = styled.div`
  position: absolute;
  bottom: calc(100% + 15px);
  right: calc(100% - 300px);
  z-index: 1000;
`;

const HoverText = styled.p`
  padding: 15px;
`;
