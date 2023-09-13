import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

jest.mock('react-error-boundary', () => ({
  useErrorBoundary: () => ({
    resetBoundary: jest.fn(),
  }),
}));

describe('ErrorMessage', () => {
  beforeEach(() => {
    render(<ErrorMessage message='에러가 발생했습니다.' />);
  });

  it('사용자 메시지를 보여줍니다.', () => {
    const text = screen.getByText(/에러가 발생했습니다./);

    expect(text).toBeInTheDocument();
  });

  it('다시 시도 버튼이 존재합니다.', () => {
    const btn = screen.getByRole('button');

    expect(btn).toBeInTheDocument();
  });
});
