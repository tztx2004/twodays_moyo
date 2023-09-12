import styled from 'styled-components';

export default function Loading() {
  return (
    <WrapperBox>
      <Spinner></Spinner>
    </WrapperBox>
  );
}

const WrapperBox = styled.div`
  background-color: #000000;
  opacity: 0.4;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 8px solid white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 99999;
  border-right-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
