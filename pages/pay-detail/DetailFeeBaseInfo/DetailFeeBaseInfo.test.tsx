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

  it('기본 정보들을 가지고 있습니다.', () => {
    const carrierAgreement = screen.getByText(/통신사 약정/);
    const regularSIMdelivery = screen.getByText(/일반 유심 배송/);
    const extraCall = screen.getByText(/부가통화/);
    const nfcSIMdelivery = screen.getByText(/NFC 유심 배송/);
    const eSIM = screen.getByText(/eSIM/);

    expect(carrierAgreement).toBeInTheDocument();
    expect(regularSIMdelivery).toBeInTheDocument();
    expect(extraCall).toBeInTheDocument();
    expect(nfcSIMdelivery).toBeInTheDocument();
    expect(eSIM).toBeInTheDocument();
  });
});
