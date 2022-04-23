import { useState } from 'react';

import DWButton from '@components/button/DWButton';
import BankSelector from '@components/select/BankSelector';
import { assetsState } from 'atoms';

import { useRecoilState } from 'recoil';

import { TransferPageWrapper } from './TransferPage.style';

const TransferPage = () => {
  const [depositSelect, setDepositSelect] = useState<string>();
  const [withdrawalSelect, setWithdrawalSelect] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [assets, setAssets] = useRecoilState(assetsState);
  const transferAssets = assets.filter(({ isTransfer }) => isTransfer === true);

  const deposit = () => {
    const depositIndex = transferAssets.findIndex(({ wallet_name }) => wallet_name === depositSelect);
    const withdrawalIndex = transferAssets.findIndex(({ wallet_name }) => wallet_name === withdrawalSelect);

    /** 송금 */
    setAssets(
      Object.entries(assets).map(([key, value]) => {
        if (+key === depositIndex) {
          return { ...value, balance: value.balance - price! };
        } else if (+key === withdrawalIndex) {
          return { ...value, balance: value.balance + price! };
        } else {
          return value;
        }
      }),
    );

    /** 초기화 */
    setPrice(undefined);
    setDepositSelect(undefined);
    setWithdrawalSelect(undefined);
  };

  return (
    <TransferPageWrapper>
      <div>
        <BankSelector transferAssets={transferAssets} select={depositSelect} setSelect={setDepositSelect} />
      </div>
      <div>
        <BankSelector transferAssets={transferAssets} select={withdrawalSelect} setSelect={setWithdrawalSelect} />
      </div>

      <div>
        <input placeholder="금액 입력" type="number" value={price ?? ''} onChange={(e) => setPrice(+e.target.value)} />
      </div>

      <div>
        <DWButton
          deposit={deposit}
          disabled={depositSelect === undefined || withdrawalSelect === undefined || !price}
        />
      </div>
    </TransferPageWrapper>
  );
};

export default TransferPage;
