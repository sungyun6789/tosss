import { useState } from 'react';

import { assetsState } from 'atoms';

import { useRecoilState } from 'recoil';

import { AdminPageWrapper } from './AdminPage.style';

const AdminPage = () => {
  const [price, setPrice] = useState<number>();
  const [assets, setAssets] = useRecoilState(assetsState);

  const onClick = () => {
    if (price) {
      setAssets([
        ...assets.map((value) =>
          value.wallet_name === '토스뱅크' ? { ...value, balance: value.balance + price } : value,
        ),
      ]);
    }
  };

  return (
    <AdminPageWrapper>
      <article>
        <input placeholder="단위: 원" onChange={(e) => setPrice(+e.target.value)} />
      </article>
      <article>
        <button onClick={onClick}>충전</button>
      </article>
    </AdminPageWrapper>
  );
};

export default AdminPage;
