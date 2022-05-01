import { TossBankBox, TossBankImage, TossBankInfo, TossBankWrapper } from './TossBankPage.style';

const TossBankPage = () => {
  return (
    <TossBankWrapper>
      <article>
        <h1>토스뱅크</h1>
        <TossBankImage />
        <TossBankInfo>
          <p>토스뱅크 통장</p>
          <span>3,000원</span>
        </TossBankInfo>

        <ul>
          <li>
            <p>토스뱅크 대출 한도</p>
            <p>14,000,000 원</p>
          </li>
          <li>
            <p>토스뱅크카드</p>
            <p>0 원</p>
          </li>
          <li>
            <p>돈 모으기</p>
            <p>1,000 원</p>
          </li>
        </ul>
        <h3>토스뱅크 둘러보기</h3>
        <TossBankBox>
          <p>토스뱅크 신용대출</p>
          <div>내 대출한도 보기</div>
        </TossBankBox>
        <TossBankBox>
          <p>매일 300원 바로 받는 캐시백</p>
          <div>토스뱅크카드 구경하기</div>
        </TossBankBox>
        <TossBankBox>
          <p>하루만 넣어도 이자가 쌓이는 통장</p>
          <div>통장 만들기</div>
        </TossBankBox>
        <TossBankBox>
          <p>나한테 딱 맞는 돈 모으기</p>
          <div>돈 모으기</div>
        </TossBankBox>
      </article>
    </TossBankWrapper>
  );
};

export default TossBankPage;
