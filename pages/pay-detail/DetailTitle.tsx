import { useRef } from 'react';
import { GoShare } from 'react-icons/go';
import { AiOutlineHeart } from 'react-icons/ai';

export default function DetailTitle() {
	const SIZE = useRef<number>(23);

	return (
		<section>
			<div>
				<div>모요개통</div>
				<div>모요ONLY</div>
			</div>

			<div>
				<p>[모요only] 슈가매니아 11GB+매일2GB+</p>
			</div>

			<div>
				<p>44,966명이 선택</p>

				<div>
					<div>
						<AiOutlineHeart size={SIZE.current} />
						<p>찜</p>
					</div>
					<div>
						<GoShare size={SIZE.current} />
						<p>공유</p>
					</div>
				</div>
			</div>
		</section>
	);
}
