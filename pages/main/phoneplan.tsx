import Link from 'next/link';
import { AiFillQuestionCircle, AiFillHeart, AiFillStar } from 'react-icons/ai';
import HoverTextBox from '../components/HoverTextBox/HoverTextBox';
// import useHover from '../hooks/useHover';
import { useEffect, useState } from 'react';

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
  // const [hover, mouseHover, mouseLeave] = useHover();
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
      title: '',
      dataPlan: '',
      callPlan: '',
      smsPlan: '',
      price: 16200,
      mno: '',
      net: '',
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
      title: '',
      dataPlan: '',
      callPlan: '',
      smsPlan: '',
      price: 16200,
      mno: '',
      net: '',
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
              <h4>모두 충분 7GB+밀리의서재</h4>
              <AiFillHeart size='24px' color='rgb(173 181 189/1)' onClick={clickHandler} />
            </div>
            <h3>
              월 7GB + 1Mbps{' '}
              <AiFillQuestionCircle
                color='#dee2e6'
                // onMouseOver={() => mouseHover(1)}
                // onMouseLeave={mouseLeave}
              />
              {/* <div>
            {hover === 0 ? (
              <HoverTextBox text={x.desc1} />
            ) : null}
          </div> */}
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

async function getData() {
  const res = await fetch('http://172.30.1.68:3000/plans?page=1');
  const data = res.json();
  console.log(data);
  return data;
}
getData;
export default PhonePlan;
