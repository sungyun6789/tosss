import { assetsState } from 'atoms';
import copy from 'utils/copy';
import krw from 'utils/krw';

import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { AssetsHeader, AssetsInfoSection } from './AssetsPage.style';

const AssetsPage = () => {
  const assets = useRecoilValue(assetsState);
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
          <div className="balance">{krw(matchData.balance)}</div>
        </article>
      </AssetsInfoSection>
    </>
  );
};

export default AssetsPage;
