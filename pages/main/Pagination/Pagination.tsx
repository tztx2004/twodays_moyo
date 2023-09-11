import Link from 'next/link';
import styled from 'styled-components';

interface IPagination {
  currnetPage: number;
  totalPage: number;
  chunkPage: number;
}

const Wrapper = styled.div``;

export const Pagination= ({
  data
}:any) => {
  console.log(data)
  return (
    <Wrapper>
      {Object.keys(data).map((x:any,idx:number)=>
        <button key={idx}>
          <Link href={`/?page=${idx+1}`}>
            {idx+1}
          </Link>
        </button>
      )}
    </Wrapper>
  );
};

export default Pagination;
