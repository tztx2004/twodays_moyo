import styled from 'styled-components';

export default function Tag({ title = '', color = 'black', ...props }) {
	return (
		<WrapperBox {...props}>
			<Title color={color}>{title}</Title>
		</WrapperBox>
	);
}

const WrapperBox = styled.div`
	background-color: #f8f9fa;
	min-width: 65px;
	height: 3vh;
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	font-size: 0.75rem;
	font-weight: 900;
`;

const Title = styled.div<{ color: string }>`
	color: ${(props) => props.color};
`;
