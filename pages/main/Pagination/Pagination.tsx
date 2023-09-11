import styled from 'styled-components';

interface IPagination {
  currnetPage: number;
  totalPage: number;
  chunkPage: number;
}

const Wrapper = styled.div``;

export const Pagination: React.FC<IPagination> = ({
  currnetPage,
  totalPage,
  chunkPage,
}: IPagination) => {
  return (
    <Wrapper>
      {/* {
        totalPage.map((_: number, idx: number) => (
          <div key={idx}>{idx}</div>
        ))
      } */}
    </Wrapper>
  );
};

export default Pagination;
