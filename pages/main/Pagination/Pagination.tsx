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

  if (!data.pageObject.startPage || !data.pageObject.endPage) {
    return null; // startPage 또는 lastPage가 없으면 아무것도 렌더링하지 않음
  }

  const buttons = [];
  for (let i = data.pageObject.startPage; i <= data.pageObject.endPage; i++) {
    buttons.push(
      <button key={i} onClick={() => handleButtonClick(i)}>
        <Link
          href={`?page=${i}`}
          className={
            i === activeButton || (activeButton === null && i === data.pageObject.startPage)
              ? 'active'
              : ''
          }
        >
          {i}
        </Link>
      </button>,
    );
  }

  return <Wrapper>{buttons}</Wrapper>;
};

export default Pagination;
