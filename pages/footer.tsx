'use client';
import { styled } from 'styled-components';

const FooterBox = styled.div`
  position: relative;
  transform: translateY(100%);
  width: 100%;
  display: block;
  color: #dee2e6;
  background-color: #2a3037;

  > footer {
    display: flex;
    flex-direction: column;
    gap: 32px;
    color: #dee2e6;
    width: 100%;
    max-width: 980px;
    margin: 0 auto;

    padding: 40px 20px 64px 20px;
    > div:nth-child(2) {
      > ul {
        display: flex;
        gap: 32px;
        font-weight: 500;
        > li {
          cursor: pointer;
        }
      }
    }
    > div:nth-child(3) {
      display: flex;
      font-size: 14px;
      color: #868e96;
      > div {
        width: 50%;
      }
    }
    > div:nth-child(4) {
      > ol {
        display: flex;
        gap: 32px;
        font-size: 14px;
        color: #868e96;
      }
    }
    > div:nth-child(5) {
      display: flex;
      gap: 12px;
    }
  }
`;

const Footer = () => {
  const icons = [
    {
      url: './images/iconFooter1.svg',
      title: '유튜브아이콘',
    },
    {
      url: './images/iconFooter2.svg',
      title: '블로그아이콘',
    },
    {
      url: './images/iconFooter3.svg',
      title: '인스타그램아이콘',
    },
    {
      url: './images/iconFooter4.svg',
      title: '페이스북아이콘',
    },
    {
      url: './images/iconFooter5.svg',
      title: '트위터아이콘',
    },
    {
      url: './images/iconFooter6.svg',
      title: '네이버아이콘',
    },
  ];
  return (
    <FooterBox>
      <footer>
        <div>
          <img src='./images/moyoFooter.svg' alt='모요단색아이콘' />
        </div>
        <div>
          <ul>
            <li>자주 묻는 질문</li>
            <li>가이드</li>
            <li>법인 회선 신청</li>
            <li>공지사항</li>
            <li>채용 안내</li>
            <li>애드링크</li>
          </ul>
        </div>
        <div>
          <div>
            <p>
              (주)모요
              <br />
              사업자등록번호 : 716-87-02405 | 대표 : 안동건
              <br />
              통신판매업 신고번호 : 2022-서울강남-04731
              <br />
              주소 : 서울 강남구 테헤란로20길 20 삼정빌딩 8층 (주)모요
              <br />
              이메일 : help@moyoplan.com
              <br />
            </p>
          </div>
          <div>
            <p>
              고객센터
              <br />
              카카오톡 : @모두의요금제
              <br />
              운영시간 : 10:00 ~ 18:00
              <br />
            </p>
          </div>
        </div>
        <div>
          <ol>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ol>
        </div>
        <div>
          {icons.map((icon, idx) => (
            <div key={icon.title}>
              <img src={icon.url} alt={icon.title} />
            </div>
          ))}
        </div>
      </footer>
    </FooterBox>
  );
};

export default Footer;
