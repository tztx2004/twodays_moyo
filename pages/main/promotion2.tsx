'use client'
import { useRouter } from "next/router";

// const router = useRouter()
const onClick =(id:string)=>{

  console.log(id)
}

const Promotion2 = () => {
  const arr = [
    {
      images: ["./images/ranking.png"],
      title: [`모요 주간`,`TOP 20 요금제`],
      subtitle: ["9월 주간 랭킹"],
    },
    {
      images: ["./images/data-inf.png"],
      title: [`데이터 · 통화`,`무제한 요금제`],
      subtitle: ["9월 월간 랭킹"],
    },
  ];
  return (
    <section>
      <h2>모요 요금제 랭킹</h2>
      <div>
        {arr.map((x, i) => (
          <div key={i}>
            <div>
              <img src={x.images[0]} alt="랭킹이미지" onClick={()=>onClick(x.title[0])}/>
            </div>
            <div>
              <h3>{x.title[0]}<br/>{x.title[1]}</h3>
              <h4>{x.subtitle[0]}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default Promotion2;