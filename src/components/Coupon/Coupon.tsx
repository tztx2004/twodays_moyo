import Image from 'next/image';
import styled from 'styled-components';

export default function Coupon() {
  return (
    <WrapperBox>
      <Image priority={true} src={'/images/coupon.png'} alt='coupon-img' width={360} height={160} />

      <InnerBox>
        <CouponInfoBox>
          <Image src={'/images/naver_pay.png'} alt='pay_icon' width={50} height={20} />
          <Price>3,000원</Price>
          <Content>쿠폰 받고 요금제 개통하면 100% 지급</Content>
        </CouponInfoBox>

        <CouponDownload>
          <DownloadButton>
            <Image src={'/images/download.png'} alt='download.png' width={20} height={20} />
          </DownloadButton>

          <p>쿠폰 받기</p>
        </CouponDownload>
      </InnerBox>
    </WrapperBox>
  );
}

const WrapperBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InnerBox = styled.div`
  position: absolute;
  display: flex;
  gap: 70px;
`;

const CouponInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Price = styled.p`
  font-size: 1.5rem;
`;

const Content = styled.p`
  font-size: 0.6rem;
  color: var(--fontLightGray);
`;

const CouponDownload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #8692f3;
  font-size: 0.8rem;
  cursor: pointer;
`;

const DownloadButton = styled.div`
  background-color: var(--buttonColor);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
