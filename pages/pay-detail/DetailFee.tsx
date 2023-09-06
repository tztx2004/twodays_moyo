import HoverTextBox from '../components/HoverTextBox/HoverTextBox';
import QuestionMark from '../components/QuestionMark/QuestionMark';

export default function DetailFee() {
	return (
		<section>
			<p>잘못된 정보 제보</p>

			<div>
				<div>
					<QuestionMark />
					<HoverTextBox />
					<p>월 25,790원</p>
				</div>

				<div>
					<p>12개월 이후 38,000원</p>
				</div>
			</div>

			<button>신청하기</button>
		</section>
	);
}
