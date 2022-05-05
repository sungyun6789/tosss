import EmptyImage from '@components/EmptyImage';
import { tossBankSelector } from 'atoms';
import krw from 'utils/krw';

import { useRecoilValue } from 'recoil';

import { TossBankBox, TossBankInfo, TossBankWrapper } from './TossBankPage.style';

const TossBankPage = () => {
  const tossBankData = useRecoilValue(tossBankSelector)[0];

  return (
    <TossBankWrapper>
      <article>
        <h1>토스뱅크</h1>
        <EmptyImage width={100} height={100} />
        <TossBankInfo>
          <p>토스뱅크 통장</p>
          <span>{krw(tossBankData.balance)}</span>
        </TossBankInfo>

        <ul>
          <li>
            <p>토스뱅크 대출 한도</p>
            <span>14,000,000 원</span>
          </li>
          <li>
            <p>토스뱅크카드</p>
            <span>0 원</span>
          </li>
          <li>
            <p>돈 모으기</p>
            <span>1,000 원</span>
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
