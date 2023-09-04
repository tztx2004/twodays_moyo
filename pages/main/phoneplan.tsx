import {
  AiFillQuestionCircle,
  AiOutlineHeart,
  AiFillStar,
} from "react-icons/ai";
function PhonePlan() {
  // 데이터 장소 : data/data.json/ props.pageProps.planMetas[idx]
  return (
    <section>
      <h2>
        요금제가 고민이신가요? <br />
        모요가 추천해 드릴게요
      </h2>
      <PlanCard />
    </section>
  );
}

function PlanCard() {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src="./images/kTskylife.svg" alt="kTskylife" />
          </div>
          <div>
            <img src="./images/모요개통아이콘.svg" alt="모요개통아이콘" />
          </div>
        </div>
        <div>
          <h4>모두 충분 7GB+밀리의서재</h4>
          <AiOutlineHeart size="24px" color="rgb(173 181 189/1)" />
        </div>
        <h3>
          월 7GB + 1Mbps <AiFillQuestionCircle color="#dee2e6" />
        </h3>
        <ul>
          <li>통화 무제한</li>
          <li></li>
          <li>문자 무제한</li>
          <li></li>
          <li>KT망</li>
          <li></li>
          <li>LTE</li>
        </ul>
        <div>
          <div>
            <div>
              월 16,200원
              <AiFillQuestionCircle color="#dee2e6" />
            </div>
            <p>
              <AiFillStar color="rgb(252 196 25/1)" /> 4.4 | 00명이 선택
            </p>
          </div>
          <div>
            <button>자세히 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const res = await fetch("./data/data.json");
  return res.json();
}

export default PhonePlan;
