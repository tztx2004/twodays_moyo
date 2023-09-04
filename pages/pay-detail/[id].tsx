import styled from 'styled-components';
import DetailTitle from './detailTitle';

const WrapperBox = styled.div`
	margin: 0 auto;
	max-width: 620px;
	position: relative;
	top: 80px;
`;

const DetailTitleBox = styled.div`
	section {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}

	section > {
		div:nth-child(1) {
			display: flex;
			gap: 0.6rem;

			div {
				background-color: #f8f9fa;
				width: 5vw;
				height: 3vh;
				border-radius: 15px;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0;
				font-size: 0.75rem;
				font-weight: 900;

				&:nth-child(2) {
					color: #425ad5;
				}
			}
		}

		div:nth-child(2) {
			font-size: 1.5rem;
			font-weight: 600;
		}

		div:nth-child(3) {
			display: flex;
			justify-content: space-between;

			> p {
				color: #9298a0;
			}

			div {
				display: flex;
				gap: 2rem;
				color: #495057;
			}
		}
	}
`;

export default function PayDetail() {
	return (
		<WrapperBox>
			<DetailTitleBox>
				<DetailTitle />
			</DetailTitleBox>
		</WrapperBox>
	);
}
