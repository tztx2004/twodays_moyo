import { useState } from 'react';

type UseHover = [number, (num: number) => void, () => void];

export default function useHover(): UseHover {
	const [hover, setHover] = useState<number>(0);

	const mouseOver = (num: number) => setHover(num);

	const mouseLeave = () => setHover(0);

	return [hover, mouseOver, mouseLeave];
}
