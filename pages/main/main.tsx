"use client";
import { styled } from "styled-components";
import Promotion1 from "./promotion1";
import Promotion2 from "./promotion2";
import Promotion3 from "./promotion3";
import PhonePlan from "./phoneplan";
import TestPage from "./fetchdatapractice";

const WrapperBox = styled.div`
  margin: 0 auto;
  max-width: 620px;
  position: relative;
  top: 80px;

  @media screen and (max-width : 700px){
    padding: 0 20px;
    top: 40px;
  }
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
    >div:nth-child(3){
      display: none;
    }
  }

  @media screen and (max-width : 700px){
    section{
      >div:nth-child(2){
        display:none;
      }
      >div:nth-child(3){
        border: 1px solid #f1f3f5;
        box-shadow: 0px 6px 18px rgba(73,80,87,0.1);
        border-radius: 16px;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr);
        grid-column-gap: 0px;
        grid-row-gap: 20px;
        padding: 28px 20px 20px 20px;
        >div:first-child{
          grid-row: 1/2;
          grid-column: 1/3;
          position: relative;
          z-index: 1;
          >h4{
            font-size: 14px;
          }
          >h3{
            font-size: 18px;
            white-space: nowrap;
          }
        }
        >div:nth-child(2){
          display: flex;
          flex-direction: row-reverse;
          grid-row: 1/3;
          grid-column: 2/3;
        }
        >div:nth-child(3){
          display: flex;
          justify-content: center;
          width: 100%;
          >button{
            width: 100%;
          }
        }
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

  @media screen and (max-width : 700px){
    section>div{
      flex-direction: column;
      gap: 20px;
      >div{
        width: 100%;
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

        @media screen and (max-width : 700px){
          grid-template-columns: repeat(3,minmax(0,1fr));
        }
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
  section{
    h2 {
      margin-top: 48px;
      margin-bottom: 10px;
      font-weight: 700;
      word-break: keep-all;
      color: #2a3037;
    }
    >div{
      position: relative;
      display: block;
      background-color: #ffffff;
      border-style: solid;
      border-color: #f1f3f5;
      padding: 20px;
      margin: 0;
      overflow: hidden;
      border-width: 1px;
      border-radius: 16px;
      margin: 0;
      box-shadow: 0 2px 8px rgba(73, 80, 87, 0.06);

    >div{
      >div{
        display: flex;
        justify-content: space-between;
      }

      div:nth-child(2){
        margin-bottom:10px;
        align-items: center;
        >h4{
          font-size: 14px;
          color: var(--fontLightGray);
          line-height: 150%;
          font-weight: 400;
        }
      }

      >h3{
        font-size: 20px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      >ul{
        display: flex;
        padding-top: 6px;
        >li{
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          column-gap: 6px;
          font-size: 14px;
          line-height: 150%;
          color: rgb(134, 142, 150);
        }
        >li:nth-child(2),
        li:nth-child(4),
        li:nth-child(6){
          height: 10px;
          margin: 0px 8px;
          align-self: center;
          border-left: 1px solid rgb(222, 226, 230);
        }
      }
      >div:nth-child(5){
        margin-top: 20px;
        >div:first-child{
          >div{
            font-size: 18px;
            display: flex;
            gap: 4px;
          }
          font-weight: bold;
          color: rgb(66, 90, 213);
          display: flex;
          width: 50%;
          align-items: center;
          justify-content: space-between;
        }
        div>p{
          font-size: 12px;
          color: var(--fontLightGray);
        }
        >div:nth-child(2){
          a>button{
            height: 40px;
            font-size: 12px;
            border-radius: 8px;
            border: none;
            padding: 0 12px;
            background-color: var(--buttonColor);
            color: #ffffff;
            width: 80px;
            cursor: pointer;
          }
          :hover{
            background-color: var(--buttonHover);
          }
        }
      }
    }
    }
  }

  @media screen and (max-width : 700px){
    section{
      >div>div>div:nth-child(5){
        flex-direction: column;
        gap: 20px;
        >div:nth-child(1){
          width: 100%;
        }
        >div:nth-child(2){
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .on{
    color: red !important;
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
