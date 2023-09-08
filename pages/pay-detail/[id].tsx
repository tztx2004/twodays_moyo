import styled from 'styled-components';

import DetailTitle from './DetailTitle';
import DetailFee from './DetailFee/DetailFee';
import DetailOtherInfo from './DetailOtherInfo/DetailOtherInfo';
import DetailCoupon from './DetailCoupon/DetailCoupon';
import DetailDataInfo from './DetailDataInfo/DetailDataInfo';
import DetailExtraInfo from './DetailExtraInfo/DetailExtraInfo';
import DetailFeeBaseInfo from './DetailFeeBaseInfo/DetailFeeBaseInfo';
import DetailFeeExtraService from './DetailFeeExtraService/DetailFeeExtraService';

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

      <DetailExtraInfo />
    </WrapperBox>
  );
}

const WrapperBox = styled.div`
  margin: 0 auto;
  max-width: 620px;
  position: relative;
  top: 80px;
`;
