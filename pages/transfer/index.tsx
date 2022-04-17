import { useState } from 'react';

import DWButton from '@components/button/DWButton';
import BankSelector from '@components/select/BankSelector';
import { transferAssetsSelector } from 'atoms';

import { useRecoilValue } from 'recoil';

import { TransferPageWrapper } from './TransferPage.style';

const TransferPage = () => {
  const [depositSelect, setDepositSelect] = useState<string>();
  const [withdrawalSelect, setWithdrawalSelect] = useState<string>();
  const transferAssets = useRecoilValue(transferAssetsSelector);

  const deposit = () => undefined;
  const withdrawal = () => undefined;

  return (
    <TransferPageWrapper>
      <div>
        <DWButton deposit={deposit} withdrawal={withdrawal} />
      </div>
      <BankSelector transferAssets={transferAssets} setSelect={setDepositSelect} />
      <BankSelector transferAssets={transferAssets} setSelect={setWithdrawalSelect} />
    </TransferPageWrapper>
  );
};

export default TransferPage;
