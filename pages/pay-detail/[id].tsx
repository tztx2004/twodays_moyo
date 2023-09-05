import styled from 'styled-components';

import DetailTitle from './DetailTitle';
import DetailDataInfo from './DetailDataInfo';
import DetailOtherInfo from './DetailOtherInfo';

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
		min-height: 130px;
	}

	section > {
		div:nth-child(1) {
			display: flex;
			gap: 0.6rem;

			div {
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

		div:nth-child(4) {
			position: absolute;
			bottom: calc(100% + 15px);
			width: auto;
			right: calc(100% - 180px);
		}

		div:nth-child(5) {
			position: absolute;
			bottom: calc(100% + 15px);
			right: calc(100% - 300px);
		}
	}
`;

const DetailDataBox = styled.div`
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2.5rem;
		min-height: 115px;
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

		div:nth-of-type(4) {
			div {
				display: flex;
				align-items: center;
				gap: 2px;

				span:nth-of-type(1) {
					width: 20px;
					height: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #dee2e6;
					border-radius: 50%;
					color: white;
					font-size: 14px;
				}

				div:nth-of-type(1) {
					position: absolute;
					bottom: calc(100% - 75px);
					left: calc(100% - 100px);
				}
			}
		}
	}
`;

const DetailOtherInfoBox = styled.div`
	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 115px;
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
