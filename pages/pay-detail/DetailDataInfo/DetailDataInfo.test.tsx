import { render, renderHook, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useHover from '@/src/hooks/useHover/useHover';
import DetailDataInfo from './DetailDataInfo';
import QuestionMarker from '@/src/components/QuestionMarker/QuestionMarker';

const context = describe;

const user = userEvent.setup();

describe('DetailDataInfo', () => {
  beforeEach(() => {
    render(<DetailDataInfo />);
  });

  it('총 데이터를 보여주는 section이 존재한다.', () => {
    const text = screen.getByText(/총 데이터/);

    expect(text).toBeInTheDocument();
  });

  it('매월 사용할 수 있는 데이터를 보여주는 section이 존재한다.', () => {
    const text = screen.getByText(/매월/);

    expect(text).toBeInTheDocument();
  });

  it('매일 채워지는 데이터를 보여주는 section이 존재한다.', () => {
    const text = screen.getByText(/매일/);

    expect(text).toBeInTheDocument();
  });

  it('데이터 소진시 데이터 속도를 표시해주는 section이 존재한다.', () => {
    const text = screen.getByText(/소진시/);

    expect(text).toBeInTheDocument();
  });

  it('소진시 데이터 속도에 대한 설명을 보여주는 아이콘이 존재한다.', () => {
    const { container } = render(<QuestionMarker />);

    expect(container).toBeInTheDocument();
  });

  context('hover를 안하면', () => {
    it('TextBox가 보이지 않는다.', () => {
      const {
        result: { current },
      } = renderHook(() => useHover());
      const [hover] = current;
      const text = screen.queryByText(/데이터 소진시 유뷰브 화질 720p 볼 수 있어요/);

      expect(hover).toBe(0);
      expect(text).toBeNull();
    });
  });

  context('hover를 하면', () => {
    it('TextBox가 보인다.', async () => {
      const { result } = renderHook(() => useHover());

      act(() => {
        result.current[1](1);
      });

      expect(result.current[0]).toBe(1);

      const hoverEl = screen.getByText('?');

      await user.hover(hoverEl);

      const text = await screen.findByTestId('hover-text');

      expect(text).toBeInTheDocument();
    });
  });
});
