import styled from 'styled-components';

import DetailTitle from './DetailTitle';
import DetailDataInfo from './DetailDataInfo';
import DetailOtherInfo from './DetailOtherInfo';

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
		border-bottom: 1px solid var(--buttonGray);
		height: 16vh;
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
			font-weight: 900;
		}

		div:nth-child(3) {
			display: flex;
			justify-content: space-between;

			> p {
				color: #9298a0;
			}
		}

		div:nth-child(3) > {
			div {
				display: flex;
				gap: 2rem;
				color: #495057;
				margin: 0;

				div {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					cursor: pointer;
				}
			}
		}
	}
`;

const DetailDataBox = styled.div`
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2.5rem;
		height: 14vh;
		border-bottom: 1px solid var(--buttonGray);
	}

	section > {
		div {
			display: flex;
			flex-direction: column;
			align-items: center;

			p:nth-child(1) {
				font-size: 0.8rem;
			}

			p:nth-child(2) {
				font-size: 1.8rem;
				font-weight: 900;
			}
		}

		p {
			font-weight: 900;
			font-size: 1.2rem;
		}

		div:nth-of-type(1) {
			p:nth-child(2) {
				color: var(--buttonHover);
			}
		}
	}
`;

const DetailOtherInfoBox = styled.div`
	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 14vh;
		border-bottom: 1px solid var(--buttonGray);

		> div:not(:nth-child(1)) {
			border-left: 1px solid var(--buttonGray);
			padding-left: 4%;
		}
	}

	p:nth-child(2) {
		font-weight: 900;
		font-size: 1.3rem;
		margin-top: 0.3rem;
	}
`;

export default function PayDetail() {
	return (
		<WrapperBox>
			<DetailTitleBox>
				<DetailTitle />
			</DetailTitleBox>

			<DetailDataBox>
				<DetailDataInfo />
			</DetailDataBox>

			<DetailOtherInfoBox>
				<DetailOtherInfo />
			</DetailOtherInfoBox>
		</WrapperBox>
	);
}
