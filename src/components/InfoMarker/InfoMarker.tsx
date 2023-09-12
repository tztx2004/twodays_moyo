import styled from 'styled-components';

export default function InfoMarker({ text = '?', color = 'white', bg = '#dee2e6', ...props }) {
  return (
    <QuestionMark color={color} bg={bg} {...props}>
      {text}
    </QuestionMark>
  );
}

const QuestionMark = styled.span<{ color: string; bg: string }>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg};
  border-radius: 50%;
  color: ${props => props.color};
  font-size: 14px;
  position: relative;
  font-weight: 900;

  @media all and (max-width: 479px) {
    width: 15px;
    height: 13px;
    font-size: 12px;
    padding-top: 2px;
  }
`;
