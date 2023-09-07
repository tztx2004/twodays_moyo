import styled from 'styled-components';

import DetailFee from './DetailFee';
import DetailTitle from './DetailTitle';
import DetailCoupon from './DetailCoupon';
import DetailDataInfo from './DetailDataInfo';
import DetailOtherInfo from './DetailOtherInfo';
import DetailFeeBaseInfo from './DetailFeeBaseInfo';
import DetailFeeExtraService from './DetailFeeExtraService';

export default function PayDetail() {
  return (
    <WrapperBox>
      <DetailTitle />

      <DetailDataInfo />

      <DetailOtherInfo />

      <DetailCoupon />

      <DetailFee />

      <DetailFeeBaseInfo />

      <DetailFeeExtraService />
    </WrapperBox>
  );
}

const WrapperBox = styled.div`
  margin: 0 auto;
  max-width: 620px;
  position: relative;
  top: 80px;
`;
