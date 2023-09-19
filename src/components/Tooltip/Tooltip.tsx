import styled from 'styled-components';

import { ElementType, ReactElement } from 'react';

interface ITooltip {
  children: ReactElement;
  Marker: ElementType;
  width: string;
}

export default function Tooltip({ children, Marker, width }: ITooltip) {
  return (
    <WrapperBox>
      <Marker />
      <HoverTextContent $width={width} data-testid='hover-text'>
        {children}
      </HoverTextContent>
    </WrapperBox>
  );
}

const WrapperBox = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;

  &:hover div {
    visibility: visible;
    opacity: 1;
  }
`;

const HoverTextContent = styled.div<{ $width: string }>`
  display: flex;
  flex-direction: column;
  padding: 15px;
  min-width: ${props => props.$width};

  visibility: hidden;
  background-color: var(--fontColor);
  color: #fff;
  border-radius: 15px;
  position: absolute;
  z-index: 10000;
  bottom: 165%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition:
    opacity 0.2s,
    visibility 0.2s;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid var(--fontColor);
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
