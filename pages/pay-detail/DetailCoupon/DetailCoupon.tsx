import Image from 'next/image';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import Coupon from '../../components/Coupon/Coupon';
import { styled } from 'styled-components';

export default function DetailCoupon() {
  return (
    <WrapperBox>
      <Title>BeeSmart 요금제만의 특별혜택</Title>

      <Coupon />

      <UseBox>
        <UseContentBox>
          <Image src={'/images/flag.png'} alt='flag' width={35} height={35} />
          <UseContentText>쿠폰 사용 방법을 꼭 확인해보세요</UseContentText>
        </UseContentBox>

        <MdOutlineArrowBackIosNew />
      </UseBox>
    </WrapperBox>
  );
}

const WrapperBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 40px 0;
  font-weight: 900;

  div:nth-of-type(1) {
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.p`
  font-size: 1.15rem;
`;

const UseBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e5eaff;
  min-height: 60px;
  border-radius: 15px;
  font-size: 0.9rem;
  padding: 0 25px;
  cursor: pointer;
  color: var(--fontColor);

  svg {
    rotate: 180deg;
  }
`;

const UseContentBox = styled.div`
  display: flex;
  align-items: center;
`;

const UseContentText = styled.p`
  margin-left: 15px;
`;
