import { render, screen } from '@testing-library/react';

import DetailFeBaseInfo from './DetailFeeBaseInfo';

describe('DetailFeeBaseInfo', () => {
  beforeEach(() => {
    render(<DetailFeBaseInfo />);
  });

  it('기본 정보 타이틀을 가지고 있습니다.', () => {
    const title = screen.getByText(/기본 정보/);

    expect(title).toBeInTheDocument();
  });

  it('통신사 약정을 가지고 있습니다.', () => {
    const carrierAgreement = screen.getByText(/통신사 약정/);

    expect(carrierAgreement).toBeInTheDocument();
  });

  it('일반 유심 배송을 가지고 있습니다.', () => {
    const regularSIMdelivery = screen.getByText(/일반 유심 배송/);

    expect(regularSIMdelivery).toBeInTheDocument();
  });

  it('부가통화를 가지고 있습니다.', () => {
    const extraCall = screen.getByText(/부가통화/);

    expect(extraCall).toBeInTheDocument();
  });

  it('NFC 유심 배송을 가지고 있습니다.', () => {
    const nfcSIMdelivery = screen.getByText(/NFC 유심 배송/);

    expect(nfcSIMdelivery).toBeInTheDocument();
  });

  it('eSIM을 가지고 있습니다.', () => {
    const eSIM = screen.getByText(/eSIM/);

    expect(eSIM).toBeInTheDocument();
  });
});
