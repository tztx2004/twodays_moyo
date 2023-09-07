import { ReactNode } from 'react';
import styled from 'styled-components';

interface QuestionMark {
  children: ReactNode;
  hover: number;
  [prop: string]: any;
}

export default function QuestionMarker({ children, hover, ...props }: QuestionMark) {
  return (
    <WrapperBox>
      <HoverTextBox hover={hover}>{children}</HoverTextBox>
      <QuestionMark {...props}>?</QuestionMark>
    </WrapperBox>
  );
}

const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;

const HoverTextBox = styled.div<{ hover: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: auto;
  height: auto;
  background-color: var(--fontColor);
  border-radius: 10px;
  color: var(--buttonGray);
  font-size: 15px;
  z-index: 1;
  position: relative;
  white-space: nowrap;
  margin-bottom: 10px;
  opacity: ${props => props.hover};

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
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

const QuestionMark = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dee2e6;
  border-radius: 50%;
  color: white;
  font-size: 14px;
`;
