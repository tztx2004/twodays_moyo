import { render, screen } from '@testing-library/react';
import DetailExtraInfo from './DetailExtraInfo';

describe('DetailExtraInfo', () => {
  beforeEach(() => {
    render(<DetailExtraInfo />);
  });

  it('기타 정보 타이틀을 가지고 있습니다.', () => {
    const text = screen.getByText(/기타 정보/);

    expect(text).toBeInTheDocument();
  });

  it('가입시 인증 방법 텍스트를 가지고 있습니다.', () => {
    const text = screen.getByText(/가입시 인증 방법/);

    expect(text).toBeInTheDocument();
  });

  it('미성년자 가입 텍스트를 가지고 있습니다.', () => {
    const text = screen.getByText(/미성년자 가입/);

    expect(text).toBeInTheDocument();
  });

  it('외국인 가입 텍스트를 가지고 있습니다.', () => {
    const text = screen.getByText(/외국인 가입/);

    expect(text).toBeInTheDocument();
  });

  it('번호 이동 수수료 텍스트를 가지고 있습니다.', () => {
    const text = screen.getByText(/번호이동 수수료/);

    expect(text).toBeInTheDocument();
  });

  it('기본 제공 초과 시 요금에 대한 텍스트가 존재합니다.', () => {
    const videoCall = screen.getByText(/영상 통화/);
    const extraCall = screen.getByText(/부가 통화/);
    const longMsg = screen.getByText('긴 문자');
    const imgMsg = screen.getByText(/사진 포함 긴 문자/);
    const videoMsg = screen.getByText(/영상 포함 긴 문자/);

    expect(videoCall).toBeInTheDocument();
    expect(extraCall).toBeInTheDocument();
    expect(longMsg).toBeInTheDocument();
    expect(imgMsg).toBeInTheDocument();
    expect(videoMsg).toBeInTheDocument();
  });
});
