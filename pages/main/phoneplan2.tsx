import Link from 'next/link';
import { AiFillQuestionCircle, AiFillHeart, AiFillStar } from 'react-icons/ai';

export async function PhonePlan() {
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

export async function PlanCard() {
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
      company: 'kt',
      src: './images/kTskylife.svg',
      개통: true,
      title: '기본요금제 1',
      dataPlan: '5GB',
      callPlan: '무제한',
      smsPlan: '무제한',
      price: 16200,
      mno: 'Kt',
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
      title: '기본요금제 2',
      dataPlan: '10GB',
      callPlan: '100분',
      smsPlan: '100건',
      price: 16200,
      mno: 'SK',
      net: '5G',
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
              월 7GB + 1Mbps <AiFillQuestionCircle color='#dee2e6' />
              {/* <div>
            {hover === 0 ? (
              <HoverTextBox text={x.desc1} />
            ) : null}
          </div> */}
            </h3>
            <ul>
              <li>{x.dataPlan}</li>
              <li></li>
              <li>{x.callPlan}</li>
              <li></li>
              <li>{x.mno}</li>
              <li></li>
              <li>{x.net}</li>
            </ul>
            <div>
              <div>
                <div>
                  월 16,200원
                  <AiFillQuestionCircle color='#dee2e6' />
                </div>
                <p>
                  <AiFillStar color='rgb(252 196 25/1)' /> 4.4 | 00명이 선택
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

// export async function getServerSideProps() {
//   const res = await fetch('http://172.30.1.68:3000/plans?page=1')
//   const data = await res.json()

//   return { props: { data } }
// }

export default PhonePlan;
