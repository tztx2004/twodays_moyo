import { render, renderHook, screen } from '@testing-library/react';

import DetailFee from './DetailFee';
import useHover from '@/pages/hooks/useHover';
import QuestionMarker from '@/pages/components/QuestionMarker/QuestionMarker';
import userEvent from '@testing-library/user-event';

const context = describe;

const user = userEvent.setup();

describe('DetailFee', () => {
  beforeEach(() => {
    render(<DetailFee />);
  });

  it('잘못된 정보 제보 텍스트를 가지고 있습니다.', () => {
    const text = screen.getByText(/잘못된 정보 제보/);

    expect(text).toBeInTheDocument();
  });

  it('금액에 대한 텍스트를 가지고 있습니다.', () => {
    const text = screen.getAllByText(/(\d+(,\d+)*)원/);

    expect(text).not.toHaveLength(0);
  });

  it('금액에 대한 추가 정보를 제공하는 아이콘이 존재합니다.', () => {
    const { container } = render(<QuestionMarker />);

    expect(container).toBeInTheDocument();
  });

  context('hover을 하지 않으면', () => {
    it('추가 정보를 나타내지 않습니다.', () => {
      const { result } = renderHook(() => useHover());

      expect(result.current[0]).toBe(0);

      const text = screen.queryByText(/12개월까지만 사용해도 위약금이 발생하지 않아요/);

      expect(text).toBeNull();
    });
  });

  context('hover을 하면', () => {
    it('추가 정보를 나타냅니다.', async () => {
      const questionMarker = screen.getByText('?');

      await user.hover(questionMarker);

      const hoverTextBox = await screen.findByTestId('hover-text');

      expect(hoverTextBox).toBeInTheDocument();
    });
  });

  it('신청하기 버튼이 존재합니다.', () => {
    const btn = screen.getByRole('button');

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('신청하기');
  });
});
