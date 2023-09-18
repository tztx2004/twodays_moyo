import styled from 'styled-components';

import { ElementType, ReactElement } from 'react';

interface ITooltip {
  children: ReactElement;
  Marker: ElementType;
  width: string;
  position: number;
  space: boolean;
}

export default function Tooltip({ children, Marker, width, position, space }: ITooltip) {
  return (
    <WrapperBox>
      <Marker />
      <HoverTextContent $width={width} $position={position} $space={space} data-testid='hover-text'>
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

const HoverTextContent = styled.div<{ $width: string; $position: number; $space: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 15px;
  min-width: ${props => props.$width};
  white-space: ${props => (props.$space ? 'nowrap' : 'normal')};
  text-align: start;

  visibility: hidden;
  background-color: var(--fontColor);
  color: #fff;
  border-radius: 15px;
  position: absolute;
  z-index: 10000;
  bottom: 165%;
  left: 50%;
  transform: ${props => `translateX(-${props.$position}%)`};
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
    left: ${props => `${props.$position}%`};
    transform: translateX(-50%);
  }

  @media all and (max-width: 700px) {
    min-width: 200px;
    white-space: normal;
  }
`;
