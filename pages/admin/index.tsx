import { useState } from 'react';

import useTransfer from 'hooks/useTransfer';

import { AdminPageWrapper } from './AdminPage.style';

const AdminPage = () => {
  const [price, setPrice] = useState<number>();

  const transferHook = useTransfer({ price, depositBank: '토스뱅크', isAdmin: true });

  const onClick = () => {
    transferHook();
    setPrice(undefined);
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
