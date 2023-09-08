import { render, screen } from '@testing-library/react';
import DetailFee from './DetailFee';
import QuestionMarker from '@/pages/components/QuestionMarker/QuestionMarker';

const context = describe;

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
    it('추가 정보를 나타내지 않습니다.');
  });
});
