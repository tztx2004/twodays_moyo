"use client";
import Link from "next/link";
import { styled } from "styled-components";

const WrapperBx = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 80px;
  border-bottom: 1px solid #f1f3f5;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #fff;

  > header {
    display: flex;
    margin: 0 auto;
    max-width: 980px;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  nav {
    ul {
      display: flex;
      column-gap: 1.2vw;
      align-items: center;
      li {
        color: #495057;
        font-size: 14px;
        cursor: pointer;
        padding: 10px 14px;
        @media screen and (max-width : 700px){
          font-size: 10px;
          padding: 0px 10px;
        }
      }
    }
  }

  .selected {
    padding: 10px 14px;
    border-radius: 12px;
    color: #425ad5;
    background-color: #f3f6ff;

    @media screen and (max-width : 700px){
      color: #000;
    }
  }

  > nav:nth-child(2) {
    display: none;
  }
  @media screen and (max-width: 700px) {
    height: 64px;
    border: none;
    header > nav {
      display: none;
    }
    > nav:nth-child(2) {
      display: block;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      background: #fff;
      display: flex;
      > ul {
        margin: 0 auto;
        justify-content: center;
      }
    }
  }
`;

function Gnb() {
  return (
    <WrapperBx>
      <header>
        <div>
          <Link href={"/main"}>
            <picture>
              <source
                srcSet="./images/moyo-icon.svg"
                media="(max-width : 700px)"
              />
              <img src="./images/moyo-full.svg" alt="메인로고" />
            </picture>
          </Link>
        </div>
        <nav>
          <ul>
            <li className="selected">홈</li>
            <li>요금제찾기</li>
            <li>인터넷찾기</li>
            <li>휴대폰찾기</li>
            <li>이벤트</li>
            <li>마이페이지</li>
          </ul>
        </nav>
      </header>
      <nav>
        <ul>
          <li className="selected">홈</li>
          <li>요금제찾기</li>
          <li>인터넷찾기</li>
          <li>휴대폰찾기</li>
          <li>이벤트</li>
          <li>마이페이지</li>
        </ul>
      </nav>
    </WrapperBx>
  );
}

export default Gnb;