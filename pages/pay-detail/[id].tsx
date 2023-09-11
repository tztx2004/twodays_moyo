'use client';
import styled from 'styled-components';

import DetailTitle from './DetailTitle/DetailTitle';
import DetailFee from './DetailFee/DetailFee';
import DetailOtherInfo from './DetailOtherInfo/DetailOtherInfo';
import DetailCoupon from './DetailCoupon/DetailCoupon';
import DetailDataInfo from './DetailDataInfo/DetailDataInfo';
import DetailExtraInfo from './DetailExtraInfo/DetailExtraInfo';
import DetailFeeBaseInfo from './DetailFeeBaseInfo/DetailFeeBaseInfo';
import DetailFeeExtraService from './DetailFeeExtraService/DetailFeeExtraService';
import { useEffect } from 'react';
import httpMethod from '@/src/utils/httpMethod';

export default function PayDetail() {
  useEffect(() => {
    (async () => {
      const res = await httpMethod.GET('tests');
      const data = await res.json();

      console.log(data);
    })();
  });
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
