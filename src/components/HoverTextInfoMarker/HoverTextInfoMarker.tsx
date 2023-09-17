import styled from 'styled-components';

interface IHoverTextInfoMarker {
  marker: string;
  hoverText: string;
  color?: string;
  bg?: string;
}

export default function HoverTextInfoMarker({
  marker,
  hoverText,
  color = 'white',
  bg = '#dee2e6',
}: IHoverTextInfoMarker) {
  return (
    <QuestionMark $color={color} $background={bg} data-tooltip={hoverText}>
      {marker}
    </QuestionMark>
  );
}

const QuestionMark = styled.button<{ $color: string; $background: string }>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$background};
  color: ${props => props.$color};
  font-size: 14px;
  position: relative;
  border-radius: 50%;
  border: ${props => `1px solid ${props.$background}`};

  &[data-tooltip]:not([data-tooltip=''])::before {
    content: attr(data-tooltip);
    position: absolute;
    background-color: var(--fontColor);
    color: #fff;
    padding: 10px 7px;
    border-radius: 10px;
    min-width: auto;
    white-space: nowrap;
    word-break: keep-all;
    padding: 15px;
    width: auto;
    bottom: 140%;
    opacity: 0;
  }

  &[data-tooltip]:not([data-tooltip=''])::after {
    content: '';
    border-width: 6px;
    border-style: solid;
    border-color: transparent;
    border-top-color: rgba(0, 0, 0);
    width: 0;
    height: 0;
    display: inline-block;
    position: absolute;
    left: 50%;
    bottom: 90%;
    transform: translate(-50%, 0);
    opacity: 0;
  }

  &:hover[data-tooltip]:not([data-tooltip=''])::before,
  &:hover[data-tooltip]:not([data-tooltip=''])::after {
    opacity: 1;
  }
`;
