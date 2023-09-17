import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import DetailDataInfo from '../../pages/pay-detail/DetailDataInfo/DetailDataInfo';
import InfoMarker from '../components/InfoMarker/InfoMarker';

const context = describe;

const user = userEvent.setup();

describe('DetailDataInfo', () => {
  beforeEach(() => {
    render(<DetailDataInfo dailyData={0} monthData={0} exhaustedData={0} />);
  });

  it('총 데이터를 보여주는 section이 존재한다.', () => {
    const text = screen.getByText(/총 데이터/);

    expect(text).toBeInTheDocument();
  });

  it('매월 사용할 수 있는 데이터를 보여주는 section이 존재한다.', () => {
    const text = screen.getByText(/매월/);

    expect(text).toBeInTheDocument();
  });

  context('매일 채워지는 데이터를 보여주는 section이 존재한다.', () => {
    it('dailyData가 0이면 화면에서 사라진다.', () => {
      const text = screen.queryByText(/매일/);

      expect(text).toBeNull();
    });

    it('dailyData가 0이 아니면 화면에 보인다.', () => {
      render(<DetailDataInfo monthData={1} dailyData={1} exhaustedData={1} />);
      const text = screen.getByText(/매일/);

      expect(text).toBeInTheDocument();
    });
  });

  context('데이터 소진시 데이터 속도를 표시해주는 section이 존재한다.', () => {
    it('exhaustedData가 0이 아니면 화면에 나온다', () => {
      render(<DetailDataInfo monthData={1} dailyData={1} exhaustedData={1} />);

      const text = screen.getByText('소진시');

      expect(text).toBeInTheDocument();
    });

    it('exhaustedData가 0이면 화면에서 사라진다.', () => {
      const text = screen.queryByText('소진시');

      expect(text).toBeNull();
    });
  });

  it('소진시 데이터 속도에 대한 설명을 보여주는 아이콘이 존재한다.', () => {
    const { container } = render(<InfoMarker />);

    expect(container).toBeInTheDocument();
  });
});
