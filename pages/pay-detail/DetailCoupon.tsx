import Image from 'next/image';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import Coupon from '../components/Coupon/Coupon';

export default function DetailCoupon() {
  return (
    <section>
      <p>BeeSmart 요금제만의 특별혜택</p>
      <Coupon />

      <div>
        <div>
          <Image src={'/images/flag.png'} alt='flag' width={35} height={35} />
          <p>쿠폰 사용 방법을 꼭 확인해보세요</p>
        </div>

        <MdOutlineArrowBackIosNew />
      </div>
    </section>
  );
}
