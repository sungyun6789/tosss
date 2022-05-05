import { useState } from 'react';

import TossButton from '@components/button/TossButton';
import BankSelector from '@components/select/BankSelector';
import { isTransferSelector } from 'atoms';
import useTransfer from 'hooks/useTransfer';

import { useRecoilValue } from 'recoil';

import { TransferPageWrapper } from './TransferPage.style';

const TransferPage = () => {
  const [depositSelect, setDepositSelect] = useState<string>();
  const [withdrawalSelect, setWithdrawalSelect] = useState<string>();
  const [price, setPrice] = useState<number>();
  const assets = useRecoilValue(isTransferSelector);

  const transferHook = useTransfer({ price, depositBank: depositSelect, withdrawalBank: withdrawalSelect });

  const deposit = () => {
    if (depositSelect === withdrawalSelect) return alert('같은 계좌로는 보낼 수 없습니다.');

    /** 송금 */
    transferHook();
    /** 초기화 */
    setPrice(undefined);
    setDepositSelect(undefined);
    setWithdrawalSelect(undefined);
  };

  return (
    <TransferPageWrapper>
      {withdrawalSelect && <p>내 {withdrawalSelect} 계좌에서</p>}
      <div>
        <BankSelector transferAssets={assets} select={withdrawalSelect} setSelect={setWithdrawalSelect} />
      </div>
      {depositSelect && <p>내 {depositSelect} 계좌로</p>}
      <div>
        <BankSelector transferAssets={assets} select={depositSelect} setSelect={setDepositSelect} />
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
