import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Wrapper = styled.section`
  .active {
    background-color: var(--buttonColor);
    color: #fff !important;
  }
`;

interface PaginationProps {
  data: Idata;
}

export const Pagination = ({ data }: Idata) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window?.location.search.length > 0) {
      window.scrollTo({ top: 940 });
    }

    const currentPage = parseInt((router.query.page as string) || '1');

    setActiveButton(currentPage);
  }, [router.asPath]);

  const handleButtonClick = (idx: number) => {
    setActiveButton(idx);

    // Page navigation
    router.push(`?page=${idx}`);
  };

  if (!data?.pageObject.startPage || !data?.pageObject.endPage) {
    return null; // startPage 또는 lastPage가 없으면 아무것도 렌더링하지 않음
  }

  const buttons = [];
  for (let i = data.pageObject.startPage; i <= data.pageObject.endPage; i++) {
    buttons.push(
      <button key={i} onClick={() => handleButtonClick(i)}>
        <Link
          href={`?page=${i}`}
          className={
            i === activeButton || (activeButton === null && i === data?.pageObject.startPage)
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
