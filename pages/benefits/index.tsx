import { BenefitWrapper, FirstText, SecondText } from './BenefitsPage.style';

const BenefitsPage = () => {
  return (
    <BenefitWrapper>
      <h1>혜택</h1>
      <article>
        <FirstText>내 포인트</FirstText>
        <SecondText>10원</SecondText>
      </article>

      <h1>포인트 모으기</h1>
      <article>
        <FirstText>만보기</FirstText>
        <SecondText>140원 받기</SecondText>
      </article>

      <article>
        <FirstText>좋아하는 브랜드에서</FirstText>
        <SecondText>브랜드 캐시백 받기</SecondText>
      </article>

      <article>
        <FirstText>이번 주 미션하면</FirstText>
        <SecondText>얼마 받을지 보기</SecondText>
      </article>

      <article>
        <FirstText>머니 알림 받고</FirstText>
        <SecondText>20원 받기</SecondText>
      </article>

      <article>
        <FirstText>토스페이 결재할 때</FirstText>
        <SecondText>할인 캐시백 받기</SecondText>
      </article>

      <article>
        <FirstText>택시 타고</FirstText>
        <SecondText>6,000원 받기</SecondText>
      </article>

      <article>
        <FirstText>계좌 만들고</FirstText>
        <SecondText>최대 20,000원 받기</SecondText>
      </article>

      <article>
        <FirstText>카드 쓰고</FirstText>
        <SecondText>50,000 받기</SecondText>
      </article>
    </BenefitWrapper>
  );
};

export default BenefitsPage;
