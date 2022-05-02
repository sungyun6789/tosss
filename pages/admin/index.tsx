import { useState } from 'react';

import { assetsState } from 'atoms';
import date from 'utils/date';

import { useRecoilState } from 'recoil';

import { AdminPageWrapper } from './AdminPage.style';

const AdminPage = () => {
  const [price, setPrice] = useState<number>();
  const [assets, setAssets] = useRecoilState(assetsState);

  const onClick = () => {
    if (price) {
      setAssets(
        assets.map((value) => {
          if (value.wallet_name === '토스뱅크') {
            return {
              ...value,
              balance: value.balance + price,
              details: [
                ...value.details!,
                {
                  id: value.details!.length + 1,
                  name: '관리자 입금',
                  date,
                  balance: price,
                  type: 'deposit',
                },
              ],
            };
          } else {
            return value;
          }
        }),
      );
      alert(`토스뱅크에 ${price}원 입금되었습니다.`);
      setPrice(undefined);
    }
  };

  return (
    <AdminPageWrapper>
      <article>
        <input placeholder="단위: 원" type="number" value={price ?? ''} onChange={(e) => setPrice(+e.target.value)} />
      </article>
      <article>
        <button onClick={onClick}>토스뱅크에 입금</button>
      </article>
    </AdminPageWrapper>
  );
};

export default AdminPage;
