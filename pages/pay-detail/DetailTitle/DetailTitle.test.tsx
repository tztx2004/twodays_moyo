import { render, screen } from '@testing-library/react';
import DetailTitle from './DetailTitle';

describe('DetailTitle', () => {
  beforeEach(() => {
    render(<DetailTitle />);
  });

  it('타이틀을 가지고 있습니다.', () => {
    const title = screen.getByTestId('title');

    expect(title).toBeInTheDocument();
  });

  it('선택한 사람들의 수가 나타나 있습니다.', () => {
    const selectNum = screen.getByText(/(\d+(,\d+)*)명이 선택/);

    expect(selectNum).toBeInTheDocument();
  });

  it('찜 버튼이 존재합니다.', () => {
    const like = screen.queryByText(/찜/);

    expect(like).toBeInTheDocument();
  });

  it('공유 버튼이 존재합니다.', () => {
    const share = screen.queryByText(/공유/);

    expect(share).toBeInTheDocument();
  });
});
