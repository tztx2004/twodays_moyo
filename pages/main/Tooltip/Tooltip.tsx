import styled from 'styled-components';

interface TooltipProps {
  text: string;
  top: number;
  left: number;
}

const Tooltip = ({ text, top, left }: TooltipProps) => {
  return (
    <WrapperBox top={top} left={left}>
      <Contents>{text}</Contents>
    </WrapperBox>
  );
};

const WrapperBox = styled.p<{ top: number; left: number }>`
  position: absolute;
  background: var(--fontColor);
  height: 30px;
  color: white;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  padding: 1%;
  border-radius: 10px;

  animation: appear 0.2s linear;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 700px) {
    top: ${props => props.top - 8}%;
  }
`;

const Contents = styled.span`
  color: #fff;
  font-weight: normal;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: var(--fontColor);
    border-bottom: 0;
    margin-left: -20px;
    margin-bottom: -7px;
  }
`;

export default Tooltip;
