import styled from 'styled-components';
import { useRouter } from 'next/router';
import React, { Suspense } from 'react';

import Loading from '@/src/components/Loading/Loading';
import useGetData from '@/src/hooks/useGetData/useGetData';

const DetailFee = React.lazy(() => import('./DetailFee/DetailFee'));
const DetailTitle = React.lazy(() => import('./DetailTitle/DetailTitle'));
const DetailCoupon = React.lazy(() => import('./DetailCoupon/DetailCoupon'));
const DetailDataInfo = React.lazy(() => import('./DetailDataInfo/DetailDataInfo'));
const DetailOtherInfo = React.lazy(() => import('./DetailOtherInfo/DetailOtherInfo'));
const DetailExtraInfo = React.lazy(() => import('./DetailExtraInfo/DetailExtraInfo'));
const DetailFeeBaseInfo = React.lazy(() => import('./DetailFeeBaseInfo/DetailFeeBaseInfo'));
const DetailFeeExtraService = React.lazy(
  () => import('./DetailFeeExtraService/DetailFeeExtraService'),
);
const DetailJoiningCondition = React.lazy(
  () => import('./DetailJoiningCondition/DetailJoiningCondition'),
);

export default function PayDetail() {
  const {
    query: { id },
  } = useRouter();
  const data = useGetData<Data>(`plans/${id}`);

  return (
    <WrapperBox>
      <Suspense fallback={<Loading />}>
        <DetailTitle title={data?.plan.plan_title} userNum={data?.numberOfUser} />

        <DetailDataInfo
          monthData={data?.plan.monthly_data ?? 0}
          dailyData={data?.plan.daily_data}
          exhaustedData={data?.plan.postExhaustedDataSpeed}
        />

        <DetailOtherInfo
          voice={data?.plan.voice}
          SMS={data?.plan.SMS}
          carrier={data?.plan.parent_carrier}
          network={data?.plan.network}
        />

        <DivideBox />

        <DetailCoupon />

        <DivideBox />

        <DetailFee
          originalPrice={data?.plan.original_price}
          period={data?.plan.discount_period}
          discountPrice={data?.plan.discounted_price}
        />

        {data?.plan.requirement !== '-' ? (
          <DetailJoiningCondition requirement={data?.plan.requirement} />
        ) : null}

        <DetailFeeBaseInfo
          contractPeriod={data?.plan.contract_period}
          simDelivery={data?.plan.sim_delivery}
          additionCall={data?.plan.addition_call}
          nfcDelivery={data?.plan.nfc_delivery}
          eSIM={data?.plan.eSIM}
        />

        <DetailFeeExtraService />

        <DetailExtraInfo
          authMethod={data?.plan.authentication_method}
          underAge={data?.plan.underage_registration}
          foreigner={data?.plan.foreigner_registration}
          transferCharge={data?.plan.transfer_charge}
        />
      </Suspense>
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
