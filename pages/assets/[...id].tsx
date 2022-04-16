import { useState } from 'react';

import DWButton from '@components/button/DWButton';
import { assetsState } from 'atoms';
import copy from 'utils/copy';

import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { AssetsHeader, AssetsInfoSection } from './AssetsPage.style';

const AssetsPage = () => {
  const [price, setPrice] = useState(0);
  const router = useRouter();
  const id = router.query.id?.[1];

  if (!id) return null;

  const [assets, setAssets] = useRecoilState(assetsState);

  const matchData = assets.filter(({ wallet_name }) => wallet_name === id)[0];
  const notMatchData = assets.filter(({ wallet_name }) => wallet_name !== id);
  const optionData = notMatchData.filter(({ transfer }) => transfer === true);

  if (!matchData || !id) return null;

  const deposit = () => {
    setAssets([...notMatchData, { ...matchData, balance: (matchData.balance ?? 0) + price }]);
  };

  const withdrawal = () => {
    setAssets([...notMatchData, { ...matchData, balance: (matchData.balance ?? 0) - price }]);
  };

  return (
    <>
      <AssetsHeader>{`${matchData.bank_name} ${matchData.wallet_name}`}</AssetsHeader>
      <AssetsInfoSection>
        <span onClick={() => copy(matchData.address)}>{matchData.address}</span>
        <article>
          <div />
          <div className="transfer">
            {matchData.transfer ? <DWButton deposit={deposit} withdrawal={withdrawal} /> : null}
          </div>
          <div className="balance">{matchData.balance.toLocaleString('ko-KR')}원</div>
        </article>
      </AssetsInfoSection>

      <input type="number" onChange={(e) => setPrice(+e.target.value)} />
      <select>
        {optionData.map(({ wallet_name }) => (
          <option key={wallet_name}>{wallet_name}</option>
        ))}
      </select>
    </>
  );
};

export default AssetsPage;
