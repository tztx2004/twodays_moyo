import styled from 'styled-components';

export default function HoverTextBox({ text = '' }) {
	return (
		<WrapperBox>
			<Text>{text}</Text>
		</WrapperBox>
	);
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

	&:after {
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

const Text = styled.p`
	padding: 15px;
`;
