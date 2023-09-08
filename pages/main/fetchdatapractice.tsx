export default async function getData() {
  const res = await fetch('http://172.30.1.68:3000/plans?page=1');
  const data = res.json();
  console.log(data);
  return {
    props: { data },
  };
}
