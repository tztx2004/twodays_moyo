'use client'
import Link from "next/link"
import { styled } from "styled-components"


const WrapperBx = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 80px;
    border-bottom: 1px solid #f1f3f5;
    position: fixed;
    top: 0;
    z-index: 999;
    background: #fff;
    
    >header{
        display: flex;
        margin: 0 auto;
        max-width: 980px;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }

    nav{
        ul{
            display: flex;
            column-gap: 1.2vw;
            align-items: center;
            li{
                color: #495057;
                font-size: 14px;
                cursor: pointer;
                padding: 10px 14px;
            }
        }
    }

    .selected{
        padding: 10px 14px;
        border-radius: 12px;
        color: #425ad5;
        background-color: #f3f6ff;
    }
`;

function Gnb(){
    return(
        <WrapperBx>
            <header>
                <div>
                    <Link href={"./"}>
                        <img src="./images/moyo-full.svg" alt="메인로고" />
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
        </WrapperBx>
    )
}





export default Gnb