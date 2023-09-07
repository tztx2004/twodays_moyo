// 세자리 수마다 콤마를 찍어주는 함수입니다
const Comma = (num: number) => {
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export default Comma;
