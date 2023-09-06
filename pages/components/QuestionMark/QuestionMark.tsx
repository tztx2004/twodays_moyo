import styled from 'styled-components';

export default function QuestionMarkBox({ ...props }) {
	return <QuestionMark {...props}>?</QuestionMark>;
}

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
