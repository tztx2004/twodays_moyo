import { styled } from 'styled-components';

export default function DetailOtherInfo() {
  return (
    <WrapperBox>
      <div>
        <p>통화</p>
        <p>무제한</p>
      </div>

      <div>
        <p>문자</p>
        <p>무제한</p>
      </div>

      <div>
        <p>통신망</p>
        <p>LGU+망</p>
      </div>

      <div>
        <p>통신기술</p>
        <p>LTE</p>
      </div>
    </WrapperBox>
  );
}

const WrapperBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 115px;
  border-bottom: 1px solid var(--buttonGray);

  @media all and (max-width: 479px) {
    border: 0;
    min-height: 80px;
    padding: 0 20px;
    font-size: 0.9rem;
  }

  > div:not(:nth-child(1)) {
    border-left: 1px solid var(--buttonGray);
    padding-left: 4%;

    @media all and (max-width: 479px) {
      border: 0;
    }
  }

  p:nth-child(2) {
    font-weight: 900;
    font-size: 1.3rem;
    margin-top: 0.3rem;

    @media all and (max-width: 479px) {
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
`;
