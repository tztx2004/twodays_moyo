import { render, screen } from '@testing-library/react';

import DetailFeeExtraService from './DetailFeeExtraService';
import { plans } from '@/src/fixtures/plans';

describe('DetailFeeExtraService', () => {
  beforeEach(() => {
    render(
      <DetailFeeExtraService
        isSupported={plans.additional_service.isSupported}
        isUnSupported={plans.additional_service.isUnsupported}
        plan={plans.plan}
      />,
    );
  });

  it('부가 서비스 타이틀을 가지고 있습니다.', () => {
    const title = screen.getByText(/부가 서비스/);

    expect(title).toBeInTheDocument();
  });

  it('모바일 핫스팟을 가지고 있습니다.', () => {
    const hotSpot = screen.getByText(/모바일 핫스팟/);

    expect(hotSpot).toBeInTheDocument();
  });

  it('해외 로밍을 가지고 있습니다.', () => {
    const roaming = screen.getByText(/해외 로밍/);

    expect(roaming).toBeInTheDocument();
  });

  it('가족 결합을 가지고 있습니다.', () => {
    const family = screen.getByText(/가족 결합/);

    expect(family).toBeInTheDocument();
  });

  it('소액 결제를 가지고 있습니다.', () => {
    const microPayment = screen.getByText(/소액 결제/);

    expect(microPayment).toBeInTheDocument();
  });

  it('데이터 쉐어링을 가지고 있습니다.', () => {
    const dataSharing = screen.getByText(/데이터 쉐어링/);

    expect(dataSharing).toBeInTheDocument();
  });
});
