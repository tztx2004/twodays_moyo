"use client";
import { styled } from "styled-components";
import Promotion1 from "./promotion1";
import Promotion2 from "./promotion2";

const WrapperBox = styled.div`
  margin: 0 auto;
  max-width: 620px;
  position: relative;
  top:80px;
`;
const Promotion1Bx = styled.div`
  > section {
    h2 {
      margin-top: 2rem;
      font-size: 24px;
      font-weight: 700;
      line-height: inherit;
      color: #2a3037;
      word-break: keep-all;
      padding-bottom: 10px;
      margin-bottom: 8px;
    }
    h4{
      font-size: 16px;
      color: #868e96;
      font-weight: normal;
      word-break: keep-all;
      word-spacing: 1px;
    }
    h3{
      font-size: 20px;
      font-weight: 700;
      color: #2a3037;
      word-break: keep-all;
      margin-top: 5px;
      word-spacing: 1.5px;
    }
    > div {
      padding: 20px 24px;
      border: 1px solid #f1f3f5;
      box-shadow: 0px 6px 18px rgba(73,80,87,0.1);
      border-radius: 16px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      


      img {
        width: 112px;
        height: 100px;
      }
      button{
        width: 100px;
        cursor: pointer;
        color: #fff;
        padding: 0 14px 0 14px;
        height: 48px;
        border: none;
        border-radius: 12px;
        background-color: #566fee;
        border-color: #566fee;
        box-shadow: none;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button:hover{
        background-color:#425ad5;
      }
    }
  }
`;

const Promotion2Bx = styled.div`
  h2{
    margin-top: 48px;
    margin-bottom: 10px;
  }
  section>div{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    >div{
      width: 300px;
      box-shadow: 0px 6px 18px rgba(73,80,87,0.1);
      border-radius: 18px;
      border: 1px solid #dee2e6;
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;

      >div:first-child{
        border-radius: 16px 0 0 16px;
        background-color: #e5eaff;
        width: 76px;
        padding: 30px 12px;
        >img{
          width: 100%;
          display: flex;
          margin: 0 auto;
        }
      }

      >div:nth-child(2){
        >h3{
          font-size: 22px;
        }
        >h4{
          font-size: 14px;
          font-weight: 500;
          line-height: 1.25;
          word-break: keep-all;
          color: rgb(134 142 150/1)!important;

          margin-top: 10px;
        }
      }
    }
  }
`

const MainPage = () => {
  return (
    <WrapperBox>
      <Promotion1Bx>
        <Promotion1 />
      </Promotion1Bx>
      <Promotion2Bx>
        <Promotion2 />
      </Promotion2Bx>
    </WrapperBox>
  );
};

export default MainPage;
