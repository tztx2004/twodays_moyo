import styled from 'styled-components';

interface IErrorMessage {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function ErrorMessage({ error, resetErrorBoundary }: IErrorMessage) {
  return (
    <WrapperBox>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary()}>다시 시도</button>
    </WrapperBox>
  );
}

const WrapperBox = styled.div``;
