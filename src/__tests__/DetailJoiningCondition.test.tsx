import { render, screen } from '@testing-library/react';
import DetailJoiningCondition from '../../pages/plans/DetailJoiningCondition/DetailJoiningCondition';

describe('DetailJoiningCondition', () => {
  beforeEach(() => {
    render(<DetailJoiningCondition />);
  });

  it('요금제 가입 조건 타이틀을 가지고 있다.', () => {
    const title = screen.getByText(/요금제 가입 조건/);

    expect(title).toBeInTheDocument();
  });
});
