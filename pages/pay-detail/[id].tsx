'use client';

import styled from 'styled-components';
import { useRouter } from 'next/router';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loading from '@/src/components/Loading/Loading';
import useGetData from '@/src/hooks/useGetData/useGetData';
import ErrorMessage from '@/src/components/ErrorMessage/ErrorMessage';

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
      <ErrorBoundary fallback={<ErrorMessage message={'잠시 후 다시 시도해주세요'} />}>
        <Suspense fallback={<Loading />}>
          <DetailTitle title={data?.plan.plan_title ?? null} userNum={data?.numberOfUser ?? 0} />

          <DetailDataInfo
            monthData={data?.plan.monthly_data ?? 0}
            dailyData={data?.plan.daily_data ?? null}
            exhaustedData={data?.plan.postExhaustedDataSpeed ?? null}
          />

          <DetailOtherInfo
            voice={data?.plan.voice ?? null}
            SMS={data?.plan.SMS ?? null}
            carrier={data?.plan.parent_carrier ?? null}
            network={data?.plan.network ?? null}
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

          <DetailFeeExtraService
            isSupported={data?.additional_service.isSupported ?? []}
            isUnSupported={data?.additional_service.isUnsupported ?? []}
            plan={data?.plan ?? {}}
          />

          <DetailExtraInfo
            authMethod={data?.plan.authentication_method}
            underAge={data?.plan.underage_registration}
            foreigner={data?.plan.foreigner_registration}
            transferCharge={data?.plan.transfer_charge}
            videoPrice={data?.plan.video_price}
            callPrice={data?.plan.call_price}
            LMS={data?.plan.LMS_price}
            MMSImg={data?.plan.MMS_image_price}
            MMSVideo={data?.plan.MMS_video_price}
          />
        </Suspense>
      </ErrorBoundary>
    </WrapperBox>
  );
}

const WrapperBox = styled.div`
  margin: 0 auto;
  max-width: 620px;
  position: relative;
  top: 140px;

  @media all and (max-width: 700px) {
    top: 90px;
  }
`;

const DivideBox = styled.div`
  @media all and (max-width: 479px) {
    background-color: #f5f5f5;
    width: 100%;
    height: 15px;
  }
`;
