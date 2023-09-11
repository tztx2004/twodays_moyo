import Image from 'next/image';
import Comma from '../../src/components/Comma/Comma';

export default function Promotion4() {
  const arr = [
    {
      id: 1,
      dataplan: 7,
      price: 1100,
      desc: '웹 서핑과 카톡만 한다면',
    },
    {
      id: 2,
      dataplan: 15,
      price: 7700,
      desc: '출퇴근길에 영상을 본다면',
    },
    {
      id: 3,
      dataplan: 71,
      price: 14250,
      desc: '매일 영상 3시간 이상 본다면',
    },
    {
      id: 4,
      dataplan: 100,
      price: 19800,
      desc: '걱정 없이 맘껏 쓰고 싶다면',
    },
  ];
  return (
    <section>
      <h2>데이터 얼마나 필요하세요?</h2>

      {arr.map((x, i) => (
        <div key={x.id}>
          <ul>
            <li>{x.dataplan}GB</li>
            <li>
              <h3>{Comma(x.price)}원</h3>
              <p>{x.desc}</p>
            </li>
            <li>
              <Image src='/images/enter.svg' alt={x.desc} width='20' height='20' />
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}
