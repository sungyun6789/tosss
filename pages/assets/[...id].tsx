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
  const data = assets.filter(({ wallet_name }) => wallet_name === id)[0];

  if (!data || !id) return null;

  const deposit = () => {
    setAssets([
      ...assets.filter(({ wallet_name }) => wallet_name !== id),
      { ...data, balance: (data.balance ?? 0) + price },
    ]);
  };

  const withdrawal = () => {
    setAssets([
      ...assets.filter(({ wallet_name }) => wallet_name !== id),
      { ...data, balance: (data.balance ?? 0) - price },
    ]);
  };

  return (
    <>
      <AssetsHeader>{`${data.bank_name} ${data.wallet_name}`}</AssetsHeader>
      <AssetsInfoSection>
        <span onClick={() => copy(data.address)}>{data.address}</span>
        <article>
          <div />
          <div className="transfer">
            {data.transfer ? <DWButton deposit={deposit} withdrawal={withdrawal} /> : null}
          </div>
          <div className="balance">{data.balance.toLocaleString('ko-KR')}원</div>
        </article>
      </AssetsInfoSection>
      <input type="number" onChange={(e) => setPrice(+e.target.value)} />
    </>
  );
};

export default AssetsPage;
