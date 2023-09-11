import Link from 'next/link';
import { AiFillQuestionCircle, AiFillHeart, AiFillStar } from 'react-icons/ai';
import Pagenation from './Pagination/Pagination';

function PhonePlan() {
  // 데이터 장소 : data/data.json/ props.pageProps.planMetas[idx]
  return (
    <section>
      <h2>
        요금제가 고민이신가요? <br />
        모요가 추천해 드릴게요
      </h2>
      <PlanCard />
      <Pagenation currnetPage={1} totalPage={120} chunkPage={50} />
    </section>
  );
}

function PlanCard() {
  const clickHandler = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return;
    e.target.classList.toggle('on');
  };

  const hoverHandler = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return;
    console.log(e.target);
  };

  const tempData = [
    {
      id: 1,
      company: '',
      src: './images/kTskylife.svg',
      개통: true,
      title: '모두 충분 7GB+밀리의서재',
      dataPlan: '7GB',
      callPlan: '통화 무제한',
      smsPlan: '문자 무제한',
      price: 16200,
      mno: 'KT망',
      net: 'LTE',
      mvnoRating: 4.4,
      numOfSignup: 4346,
      desc1: '데이터 소진 시 유튜브 화질 1080p를 볼 수 있어요',
      desc2: '',
    },
    {
      id: 2,
      company: '',
      src: './images/이야기모바일.svg',
      개통: false,
      title: '모두 충분 7GB+밀리의서재',
      dataPlan: '7GB',
      callPlan: '통화 무제한',
      smsPlan: '문자 무제한',
      price: 16200,
      mno: 'SK망',
      net: 'LTE',
      mvnoRating: 4.4,
      numOfSignup: 4346,
      desc1: '데이터 소진 시 유튜브 화질 720p를 볼 수 있어요',
      desc2: '',
    },
  ];

  return (
    <>
      {tempData.map((x, i) => (
        <div key={x.id}>
          <div>
            <div>
              <div>
                <img src={x.src} alt='kTskylife' />
              </div>
              <div>{x.개통 && <img src='./images/모요개통아이콘.svg' alt='모요개통아이콘' />}</div>
            </div>

            <div>
              <h4>{x.title}</h4>
              <AiFillHeart size='24px' color='rgb(173 181 189/1)' onClick={clickHandler} />
            </div>

            <h3>
              월 {x.dataPlan} + 1Mbps <AiFillQuestionCircle color='#dee2e6' />
            </h3>

            <ul>
              <li>{x.callPlan}</li>
              <li></li>
              <li>{x.smsPlan}</li>
              <li></li>
              <li>{x.mno}</li>
              <li></li>
              <li>{x.net}</li>
            </ul>

            <div>
              <div>
                <div>
                  월 {x.price.toLocaleString()}원
                  <AiFillQuestionCircle color='#dee2e6' />
                </div>
                <p>
                  <AiFillStar color='rgb(252 196 25/1)' /> {x.mvnoRating} | {x.numOfSignup}명이 선택
                </p>
              </div>

              <div>
                <Link href={`./pay-detail/${x.id}`}>
                  <button>자세히 보기</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

async function getData() {
  const res = await fetch('http://172.30.1.68:3000/plans?page=1');
  const data = res.json();
  console.log(data);
  return data;
}
getData;
export default PhonePlan;
