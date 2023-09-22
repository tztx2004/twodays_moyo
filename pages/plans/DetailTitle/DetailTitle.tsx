'use client';
import { useRef } from 'react';
import { GoShare } from 'react-icons/go';
import { styled } from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

import Tag from '../../../src/components/Tag/Tag';
import Tooltip from '@/src/components/Tooltip/Tooltip';

interface IDetailTitle {
  title: string | null;
  userNum: number;
}

export default function DetailTitle({ title, userNum }: IDetailTitle) {
  const SIZE = useRef<number>(23);

  console.log(title, userNum);

  return (
    <WrapperBox>
      <TagBox>
        <Tooltip Marker={() => Tag({ title: '모요개통' })} width='300px' position={10} space={true}>
          <p>상담사를 기다리지 않고 직접 개통할 수 있어요!</p>
        </Tooltip>

        <Tooltip
          Marker={() => Tag({ title: '모요ONLY', color: '#425ad5' })}
          width='400px'
          position={20}
          space={true}
        >
          <p>BeeSmart에서만 할인된 가격이나 혜택으로 개통할 수 있어요!</p>
        </Tooltip>
      </TagBox>

      <PlanName data-testid='title'>{title}</PlanName>

      <AdditionalInfoBox>
        <NumberOfSubscribers>{`${userNum?.toLocaleString()}명이 선택`}</NumberOfSubscribers>

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
