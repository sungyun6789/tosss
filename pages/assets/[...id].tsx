import { assetsState } from 'atoms';
import copy from 'utils/copy';

import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { AssetsHeader, AssetsInfoSection } from './AssetsPage.style';

const AssetsPage = () => {
  const [assets, setAssets] = useRecoilState(assetsState);
  const router = useRouter();
  const id = router.query.id?.[1];

  if (!id) return null;

  const matchData = assets.filter(({ wallet_name }) => wallet_name === id)[0];

  if (!matchData || !id) return null;

  return (
    <>
      <AssetsHeader>{`${matchData.bank_name} ${matchData.wallet_name}`}</AssetsHeader>
      <AssetsInfoSection>
        <span onClick={() => copy(matchData.address)}>{matchData.address}</span>
        <article>
          <div className="balance">{matchData.balance.toLocaleString('ko-KR')}원</div>
        </article>
      </AssetsInfoSection>
    </>
  );
};

export default AssetsPage;
