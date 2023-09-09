import { render, screen } from '@testing-library/react';
import Coupon from './Coupon';

describe('Coupon', () => {
  beforeEach(() => {
    render(<Coupon />);
  });

  it('쿠폰을 적용할 수 있는 결제수단 아이콘이 존재한다.', () => {
    const icon = screen.getByAltText('pay_icon');

    expect(icon).toBeInTheDocument();
  });

  it('할인 금액이 존재한다.', () => {
    const fee = screen.getByText(/^[0-9,]+원$/);

    expect(fee).toBeInTheDocument();
  });

  it('쿠폰 받기 아이콘이 존재한다.', () => {
    const getCouponBtn = screen.getByAltText('download.png');

    expect(getCouponBtn).toBeInTheDocument();
  });

  it('쿠폰 받기 텍스트가 존재한다.', () => {
    const text = screen.getByText(/쿠폰 받기/);

    expect(text).toBeInTheDocument();
  });
});
