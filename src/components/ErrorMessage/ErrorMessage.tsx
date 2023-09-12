import styled from 'styled-components';

interface IErrorMessage {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function ErrorMessage({ error, resetErrorBoundary }: IErrorMessage) {
  return (
    <WrapperBox>
      <Msg>{error.message}</Msg>
      <Btn onClick={() => resetErrorBoundary()}>다시 시도</Btn>
    </WrapperBox>
  );
}

const WrapperBox = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media all and (max-width: 700px) {
    padding: 0 20px;
  }
`;

const Msg = styled.p`
  font-size: 1.1rem;
`;

const Btn = styled.button`
  border: 0;
  border-radius: 15px;
  background-color: var(--buttonColor);
  width: 60%;
  height: 40px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 5%;
  cursor: pointer;
`;
