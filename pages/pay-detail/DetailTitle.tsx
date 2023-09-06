import { useRef } from 'react';
import { GoShare } from 'react-icons/go';
import { AiOutlineHeart } from 'react-icons/ai';

import useHover from '../hooks/useHover';
import HoverTextBox from '../components/HoverTextBox/HoverTextBox';
import Tag from '../components/Tag/Tag';

export default function DetailTitle() {
  const SIZE = useRef<number>(23);
  const [hover, mouseOver, mouseLeave] = useHover();

  return (
    <section>
      <div>
        <Tag title='모요개통' onMouseOver={() => mouseOver(1)} onMouseLeave={mouseLeave} />

        <Tag
          title='모요ONLY'
          color='#425ad5'
          onMouseOver={() => mouseOver(2)}
          onMouseLeave={mouseLeave}
        />
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
      <div>
        {hover === 1 ? (
          <HoverTextBox text={'상담사를 기다리지 않고 직접 개통할 수 있어요.'} />
        ) : null}
      </div>

      <div>
        {hover === 2 ? (
          <HoverTextBox text={'BeeSmart에서만 할인된 가격이나 혜택으로 개통할 수 있어요!'} />
        ) : null}
      </div>
    </section>
  );
}
