export default function Promotion3() {
  const arr = [
    {
      title: `ktmmobile`,
      url: `./images/ktmmobile.svg`,
    },
    {
      title: `kTskylife`,
      url: `./images/kTskylife.svg`,
    },
    {
      title: `SKT`,
      url: `./images/SKT.svg`,
    },
    {
      title: `sk7mobile`,
      url: `./images/sk7mobile.svg`,
    },
    {
      title: `lgu`,
      url: `./images/lgu.svg`,
    },
    {
      title: `헬로모바일`,
      url: `./images/헬로모바일.svg`,
    },
    {
      title: `U+알뜰모바일`,
      url: `./images/U+알뜰모바일.svg`,
    },
    {
      title: `KCTV`,
      url: `./images/KCTV.svg`,
    },
    {
      title: `KG모바일`,
      url: `./images/KG모바일.svg`,
    },
    {
      title: `고고모바일`,
      url: `./images/고고모바일.svg`,
    },
    {
      title: `liivm`,
      url: `./images/liivm.svg`,
    },
    {
      title: `marvelring`,
      url: `./images/marvelring.svg`,
    },
    {
      title: `mobing`,
      url: `./images/mobing.svg`,
    },
    {
      title: `미니게이트`,
      url: `./images/미니게이트.svg`,
    },
    {
      title: `valuecomm`,
      url: `./images/valuecomm.svg`,
    },
    {
      title: `사람과연결`,
      url: `./images/사람과연결.svg`,
    },
    {
      title: `sugarmobile`,
      url: `./images/sugarmobile.svg`,
    },
    {
      title: `snowman`,
      url: `./images/snowman.svg`,
    },
    {
      title: `smartel`,
      url: `./images/smartel.svg`,
    },
    {
      title: `아시아모바일`,
      url: `./images/아시아모바일.svg`,
    },
    {
      title: `아이즈모바일`,
      url: `./images/아이즈모바일.svg`,
    },
    {
      title: `ntelecom`,
      url: `./images/ntelecom.svg`,
    },
    {
      title: `에르엘`,
      url: `./images/에르엘.svg`,
    },
    {
      title: `에스원안심모바일`,
      url: `./images/에스원안심모바일.svg`,
    },
    {
      title: `amobile`,
      url: `./images/amobile.svg`,
    },
    {
      title: `yeoyou`,
      url: `./images/yeoyou.svg`,
    },
    {
      title: `위너스텔`,
      url: `./images/위너스텔.svg`,
    },
    {
      title: `이야기모바일`,
      url: `./images/이야기모바일.svg`,
    },
    {
      title: `이지모바일`,
      url: `./images/이지모바일.svg`,
    },
    {
      title: `insmobile`,
      url: `./images/insmobile.svg`,
    },
    {
      title: `tplus`,
      url: `./images/tplus.svg`,
    },
    {
      title: `프리티`,
      url: `./images/프리티.svg`,
    },
    {
      title: `핀다이렉트`,
      url: `./images/핀다이렉트.svg`,
    },
    {
      title: `pointplus`,
      url: `./images/pointplus.svg`,
    },
    {
      title: `tossmobile`,
      url: `./images/tossmobile.svg`,
    },
  ];
  return (
    <section>
      <h2>
        모요는 <br /> 아래 통신사와 함께하고 있어요.
      </h2>

      <div>
        <ul>
          {arr.map((x, i) => (
            <li key={x.title}>
              <img src={x.url} alt={x.title} loading='lazy' />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
