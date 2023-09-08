import { ReactNode } from 'react';
import styled from 'styled-components';

interface IHoverTextBox {
  children: ReactNode;
}

export default function HoverTextBox({ children }: IHoverTextBox) {
  return <WrapperBox>{children}</WrapperBox>;
}

const WrapperBox = styled.div`
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
