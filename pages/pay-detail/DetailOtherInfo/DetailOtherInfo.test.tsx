import { render, screen } from '@testing-library/react';
import DetailOtherInfo from './DetailOtherInfo';

describe('DetailOtherInfo', () => {
  beforeEach(() => {
    render(<DetailOtherInfo />);
  });

  it('통화에 대한 정보를 가지고 있습니다.', () => {
    const call = screen.getByText(/통화/);

    expect(call).toBeInTheDocument();
  });

  it('문자에 대한 정보를 가지고 있습니다.', () => {
    const msg = screen.getByText(/문자/);

    expect(msg).toBeInTheDocument();
  });

  it('통신망에 대한 정보를 가지고 있습니다.', () => {
    const network = screen.getByText(/통신망/);

    expect(network).toBeInTheDocument();
  });

  it('통신기술에 대한 정보를 가지고 있습니다.', () => {
    const tech = screen.getByText(/통신기술/);

    expect(tech).toBeInTheDocument();
  });
});
