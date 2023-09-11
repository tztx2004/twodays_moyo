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
