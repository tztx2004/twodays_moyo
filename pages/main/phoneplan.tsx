import Link from 'next/link';
import { AiFillQuestionCircle, AiFillHeart, AiFillStar } from 'react-icons/ai';

import Image from 'next/image';
import Pagination from './Pagination/Pagination';

function PhonePlan({ data }: Idata) {
  // 데이터 장소 : data/data.json/ props.pageProps.planMetas[idx]

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

  const hoverHandler = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return;
    console.log(e.target);
  };

  return (
    <>
      {data.plans.map((x: any, i: number) => (
        <div key={x.plan_id}>
          <div>
            <div>
              <div style={{ display: 'block' }}>
                <Image
                  src={'/images/kTskylife.svg'}
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
              <li>{x.voice === '기본제공' ? x.voice : `${x.voice}분`}</li>
              <li></li>
              <li>{x.SMS === '기본제공' ? x.SMS : `${x.SMS}건`}</li>
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
                  <AiFillQuestionCircle color='#dee2e6' />
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
                <Link href={`/pay-detail/${x.plan_id}`}>
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
