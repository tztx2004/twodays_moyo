"use client";
import { styled } from "styled-components";
import Promotion1 from "./promotion1";
import Promotion2 from "./promotion2";
import Promotion3 from "./promotion3";
import PhonePlan from "./phoneplan";

const WrapperBox = styled.div`
  margin: 0 auto;
  max-width: 620px;
  position: relative;
  top: 80px;
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
    h4 {
      font-size: 16px;
      color: #868e96;
      font-weight: normal;
      word-break: keep-all;
      word-spacing: 1px;
    }
    h3 {
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
      box-shadow: 0px 6px 18px rgba(73, 80, 87, 0.1);
      border-radius: 16px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 112px;
        height: 100px;
      }
      button {
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
      button:hover {
        background-color: #425ad5;
      }
    }
  }
`;

const Promotion2Bx = styled.div`
  h2 {
    margin-top: 48px;
    margin-bottom: 10px;
    font-weight: 700;
    word-break: keep-all;
    color: #2a3037;
  }
  section > div {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    > div {
      width: 300px;
      box-shadow: 0px 6px 18px rgba(73, 80, 87, 0.1);
      border-radius: 18px;
      border: 1px solid #dee2e6;
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;

      > div:first-child {
        border-radius: 16px 0 0 16px;
        background-color: #e5eaff;
        width: 76px;
        padding: 30px 12px;
        > img {
          width: 100%;
          display: flex;
          margin: 0 auto;
        }
      }

      > div:nth-child(2) {
        > h3 {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.25;
          word-break: keep-all;
          color: rgb(42 48 55/1);
        }
        > h4 {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.25;
          word-break: keep-all;
          color: rgb(134 142 150/1);

          margin-top: 10px;
        }
      }
    }
  }
`;

const Promotion3Bx = styled.div`
  section{
    >h2{
      margin-top: 48px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      font-weight: 700;
      word-break: keep-all;
      color: #2a3037;
    }
    >div{
      margin-top: 20px;
      >ul{
        display: grid;
        grid-template-columns: repeat(4,minmax(0,1fr));
        gap: 8px;

        >li{
          padding: 16px;
          display: flex;
          justify-content: center;
          >img{
            height: 40px;
            width: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
`;
const PhonePlanBx = styled.div`
  
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
      <PhonePlanBx>
        <PhonePlan/>
      </PhonePlanBx>
      <Promotion3Bx>
        <Promotion3 />
      </Promotion3Bx>
    </WrapperBox>
  );
};

export default MainPage;
