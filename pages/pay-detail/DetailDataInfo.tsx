import useHover from '../hooks/useHover';
import HoverTextBox from '../components/HoverTextBox/HoverTextBox';

export default function DetailDataInfo() {
	const [hover, mouseHover, mouseLeave] = useHover();

	return (
		<section>
			<div>
				<p>총 데이터</p>
				<p>71GB</p>
			</div>

			<p>=</p>

			<div>
				<p>매월</p>
				<p>11GB</p>
			</div>

			<p>+</p>

			<div>
				<p>매일</p>
				<p>2GB</p>
			</div>

			<p>+</p>

			<div>
				<div>
					<p>소진시</p>
					<span onMouseOver={() => mouseHover(1)} onMouseLeave={mouseLeave}>
						?
					</span>
					<div>
						{hover === 1 ? (
							<HoverTextBox text={'데이터 소진시 유튜브 화질 720p 볼 수 있어요'} />
						) : null}
					</div>
				</div>
				<p>3Mbps</p>
			</div>
		</section>
	);
}
