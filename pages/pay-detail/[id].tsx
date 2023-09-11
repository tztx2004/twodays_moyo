'use client';
import { useEffect } from 'react';
import styled from 'styled-components';

import DetailFee from './DetailFee/DetailFee';
import httpMethod from '@/src/utils/httpMethod/httpMethod';
import DetailTitle from './DetailTitle/DetailTitle';
import DetailCoupon from './DetailCoupon/DetailCoupon';
import DetailDataInfo from './DetailDataInfo/DetailDataInfo';
import DetailOtherInfo from './DetailOtherInfo/DetailOtherInfo';
import DetailExtraInfo from './DetailExtraInfo/DetailExtraInfo';
import DetailFeeBaseInfo from './DetailFeeBaseInfo/DetailFeeBaseInfo';
import DetailFeeExtraService from './DetailFeeExtraService/DetailFeeExtraService';

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

      <DivideBox />

      <DetailCoupon />

      <DivideBox />

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

const DivideBox = styled.div`
  @media all and (max-width: 479px) {
    background-color: #f5f5f5;
    width: 100%;
    height: 15px;
  }
`;
