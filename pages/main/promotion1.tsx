import Image from 'next/image';
import Link from 'next/link';

const PromotionCard = () => {
  return (
    <div>
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/benefit_naver_with_coin.png`}
          alt='네이버코인이미지'
          width={112}
          height={100}
        />
      </div>

      <div>
        <h4>모요개통 요금제 첫 개통 혜택!</h4>
        <h3>네이버 페이 3,000원을 드려요</h3>
      </div>

      <div>
        <button>
          <Link href={'/pay-detail/2'}>혜택 쿠폰 받기</Link>
        </button>
      </div>
    </div>
  );
};

function Promotion1() {
  return (
    <section>
      <h2>요금제 바꾸고 헤택도 받아보세요</h2>
      <PromotionCard />
      {/* 미디어쿼리 */}
      <div>
        <div>
          <h4>모요개통 요금제 첫 개통 혜택!</h4>
          <h3>네이버 페이 3,000원을 드려요</h3>
        </div>

        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/benefit_naver_with_coin.png`}
            alt='네이버코인이미지'
            width={112}
            height={100}
          />
        </div>

        <div>
          <button>혜택 쿠폰 받기</button>
        </div>
      </div>
    </section>
  );
}

export default Promotion1;
