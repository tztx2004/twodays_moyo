import Link from 'next/link';
import { AiFillQuestionCircle, AiFillHeart, AiFillStar } from 'react-icons/ai';

import Image from 'next/image';
import Pagination from './Pagination/Pagination';
import Tooltip from './Tooltip/Tooltip';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function PhonePlan() {
  const [data, setData] = useState<Iobject | null>(null);
  const router = useRouter();
  const page = router.query.page || '1';

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_KEY}/plans?page=${page}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [page]); // 의존성 배열에 page 추가

  if (!data) {
    return <div>Loading...</div>; // 데이터가 로드되지 않았을 때 보여줄 컴포넌트
  }

  return (
    <section>
      <h2>
        요금제가 고민이신가요? <br />
        모요가 추천해 드릴게요
      </h2>
      <PlanCard data={data} />
      <Pagination data={data} />
    </section>
  );
}

function PlanCard({ data }: Idata) {
  const clickHandler = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return;
    e.target.classList.toggle('on');
  };

  const [tooltipOver, setTooltipOver] = useState<boolean[]>(
    new Array(data?.plans.length).fill(false),
  );

  const hoverHandler = (index: number) => {
    setTooltipOver(prevState => prevState.map((val, i) => (i === index ? true : val)));
  };

  const hoverOutHandler = (index: number) => {
    setTooltipOver(prevState => prevState.map((val, i) => (i === index ? false : val)));
  };

  return (
    <>
      {data?.plans.map((x: any, i: number) => (
        <div key={x.plan_id}>
          <div>
            <div>
              <div style={{ display: 'block' }}>
                <Image
                  src={x.carrier_logo}
                  alt={x.carrier}
                  width={50}
                  height={20}
                  layout='responsive'
                  loading='lazy'
                />
              </div>
              <div>
                {x.isAppliableHere === 1 && (
                  <img src='./images/모요개통아이콘.svg' alt='모요개통아이콘' />
                )}
              </div>
            </div>

            <div>
              <h4>{x.plan_title}</h4>
              <AiFillHeart size='24px' color='rgb(173 181 189/1)' onClick={clickHandler} />
            </div>

            <h3>
              월 {x.monthly_data}GB
              {x.postExhaustedDataSpeed !== 0 ? ` + ${x.postExhaustedDataSpeed}Mbps` : ``}{' '}
              {x.postExhaustedDataSpeed ? <AiFillQuestionCircle color='#dee2e6' /> : ''}
            </h3>

            <ul>
              <li>{x.voice === '999999' ? '기본제공' : `${x.voice}분`}</li>
              <li></li>
              <li>{x.SMS === '999999' ? '기본제공' : `${x.SMS}건`}</li>
              <li></li>
              <li>{x.parent_carrier}</li>
              <li></li>
              <li>{x.network}</li>
            </ul>

            <div>
              <div
                style={{
                  flexDirection:
                    x.discount_period >= 999999 || x.discount_period === 0 ? 'row' : 'column',
                }}
              >
                <div>
                  월 {x.discounted_price.toLocaleString()}원
                  {tooltipOver[i] && (
                    <Tooltip
                      text={'7개월까지만 사용해도 위약금이 발생하지 않아요'}
                      top={45}
                      left={0}
                    />
                  )}
                  <AiFillQuestionCircle
                    color='#dee2e6'
                    onMouseEnter={() => hoverHandler(i)}
                    onMouseLeave={() => hoverOutHandler(i)}
                  />
                </div>
                <div>
                  {x.discount_period >= 999999 || x.discount_period === 0 ? (
                    ''
                  ) : (
                    <p>
                      {`${
                        x.discount_period === 456789
                          ? `계단식 할인`
                          : `${x.discount_period}개월 이후 `
                      }
                      ${x.original_price.toLocaleString()}원`}
                    </p>
                  )}
                  <p>
                    <AiFillStar color='rgb(252 196 25/1)' /> {x.starPoint.score} |{' '}
                    {x.starPoint.numberOfParticipants.toLocaleString()}명이 선택
                  </p>
                </div>
              </div>

              <div>
                <Link href={`/plans/${x.plan_id}`}>
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

export default PhonePlan;
