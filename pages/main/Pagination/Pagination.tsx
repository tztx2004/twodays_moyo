import Link from 'next/link';
import styled from 'styled-components';
import { Idata } from '../type';
import { useState } from 'react';

const Wrapper = styled.div`
  .active {
    background-color: var(--buttonColor);
    color: #fff !important;
  }
`;

export const Pagination = ({ data }: Idata) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (idx: number) => {
    setActiveButton(idx);
  };

  // 버튼 클릭 시 해당 컴포넌트의 제목까지 스크롤 됨
  const scrollTO = (e:React.MouseEvent<HTMLAnchorElement>)=>{
    e.preventDefault();
    typeof window !== 'undefined'? window.scrollTo({top: 950, behavior:'smooth'}) : null
  }

  return (
    <Wrapper>
      {Object.keys(data).map((x: any, idx: number) => (
        <button key={idx} onClick={() => handleButtonClick(idx)}>
          <Link
            className={idx === activeButton || (activeButton === null && idx === 0) ? 'active' : ''}
            href={`?page=${idx + 1}`}
            onClick = {scrollTO}
          >
            {idx + 1}
          </Link>
        </button>
      ))}
    </Wrapper>
  );
};

export default Pagination;
