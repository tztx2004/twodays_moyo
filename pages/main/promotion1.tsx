import { useEffect, useState } from "react";

function Promotion1(){
  const [data, setData] = useState<string|null>(null);

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);
  
  return (
    <section>
      <h2>요금제 바꾸고 헤택도 받아보세요</h2>
      <div>
        <div>
          <img
            src="./images/benefit_naver_with_coin.png"
            alt="네이버코인이미지"
          />
        </div>
        <div>
          <h4>모요개통 요금제 첫 개통 혜택!</h4>
          <h3>네이버 페이 3,000원을 드려요</h3>
        </div>
        <div>
          <button>혜택 쿠폰 받기</button>
        </div>
      </div>
    </section>
  );
};

async function fetchData() {
  const res = await fetch(
    "https://port-0-mini-1xxfe2blm041iap.sel5.cloudtype.app"
  );
  const data = await res.text();
  console.log(data);
  return data;
}

export default Promotion1;
