import Link from 'next/link';
import styled from 'styled-components';
import { Idata } from '../type';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  .active {
    background-color: var(--buttonColor);
    color: #fff !important;
  }
`;

export const Pagination = ({ data }: Idata) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const router = useRouter(); // 추가

  useEffect(() => {
    if (typeof window !== 'undefined' && window?.location.search.length > 0) {
      window.scrollTo({ top: 940 }); // 추가
    }
  }, [router.asPath]); // 라우터의 경로가 변경될 때마다 실행

  const handleButtonClick = (idx: number) => {
    setActiveButton(idx);
  };

  return (
    <Wrapper>
      {Object.keys(data).map((x: any, idx: number) => (
        <button key={idx} onClick={() => handleButtonClick(idx)}>
          <Link
            className={idx === activeButton || (activeButton === null && idx === 0) ? 'active' : ''}
            href={`?page=${idx + 1}`}
          >
            {idx + 1}
          </Link>
        </button>
      ))}
    </Wrapper>
  );
};

export default Pagination;
