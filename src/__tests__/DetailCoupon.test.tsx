import { render, screen } from '@testing-library/react';

import DetailCoupon from '../../pages/pay-detail/DetailCoupon/DetailCoupon';
import Coupon from '@/src/components/Coupon/Coupon';

describe('DetailCoupon', () => {
  it('혜택에 대한 설명이 있다.', () => {
    render(<DetailCoupon />);

    const pTag = screen.getByText(/BeeSmart 요금제만의 특별혜택/);

    expect(pTag).toBeInTheDocument();
  });

  it('coupon 컴포넌트가 있다.', () => {
    const { container } = render(<Coupon />);

    expect(container).toBeInTheDocument();
  });

  it('coupon 사용방법을 알려주는 버튼이 있다.', () => {
    render(<DetailCoupon />);

    const text = screen.getByText(/쿠폰 사용 방법을 꼭 확인해보세요/);

    expect(text).toBeInTheDocument();
  });

  it('coupon 사용방법에는 flag svg가 존재한다.', async () => {
    render(<DetailCoupon />);

    const svg = await screen.findByAltText('flag');

    expect(svg).toBeInTheDocument();
  });
});
