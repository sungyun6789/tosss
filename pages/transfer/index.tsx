import { useState } from 'react';

import TossButton from '@components/button/TossButton/TossButton';
import BankSelector from '@components/select/BankSelector';
import { assetsState } from 'atoms';
import date from 'utils/date';

import { useRecoilState } from 'recoil';

import { TransferPageWrapper } from './TransferPage.style';

const TransferPage = () => {
  const [depositSelect, setDepositSelect] = useState<string>();
  const [withdrawalSelect, setWithdrawalSelect] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [assets, setAssets] = useRecoilState(assetsState);
  const transferAssets = assets.filter(({ isTransfer }) => isTransfer === true);

  const deposit = () => {
    if (depositSelect === withdrawalSelect) return alert('같은 계좌로는 보낼 수 없습니다.');

    const depositIndex = assets.findIndex(({ wallet_name }) => wallet_name === depositSelect);
    const withdrawalIndex = assets.findIndex(({ wallet_name }) => wallet_name === withdrawalSelect);

    /** 송금 */
    setAssets(
      Object.entries(assets).map(([key, value]) => {
        if (+key === depositIndex) {
          return {
            ...value,
            balance: value.balance - price!,
            details: [
              {
                id: value.details!.length + 1,
                name: withdrawalSelect!,
                date,
                balance: price!,
                type: 'withdrawal',
              },
              ...value.details!,
            ],
          };
        } else if (+key === withdrawalIndex) {
          return {
            ...value,
            balance: value.balance + price!,
            details: [
              {
                id: value.details!.length + 1,
                name: depositSelect!,
                date,
                balance: price!,
                type: 'deposit',
              },
              ...value.details!,
            ],
          };
        } else {
          return value;
        }
      }),
    );
    alert('보내기에 성공했습니다!');
    /** 초기화 */
    setPrice(undefined);
    setDepositSelect(undefined);
    setWithdrawalSelect(undefined);
  };

  return (
    <TransferPageWrapper>
      {depositSelect && <p>내 {depositSelect} 계좌에서</p>}
      <div>
        <BankSelector transferAssets={transferAssets} select={depositSelect} setSelect={setDepositSelect} />
      </div>
      {withdrawalSelect && <p>내 {withdrawalSelect} 계좌로</p>}
      <div>
        <BankSelector transferAssets={transferAssets} select={withdrawalSelect} setSelect={setWithdrawalSelect} />
      </div>
      <div>
        <input placeholder="금액 입력" type="number" value={price ?? ''} onChange={(e) => setPrice(+e.target.value)} />
      </div>
      <div>
        <TossButton
          onClick={deposit}
          disabled={depositSelect === undefined || withdrawalSelect === undefined || !price}
          text="보내기"
        />
      </div>
    </TransferPageWrapper>
  );
};

export default TransferPage;
