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

  return (
    <TransferPageWrapper>
      <div>
        <BankSelector transferAssets={transferAssets} select={depositSelect} setSelect={setDepositSelect} />
      </div>
      <div>
        <BankSelector transferAssets={transferAssets} select={withdrawalSelect} setSelect={setWithdrawalSelect} />
      </div>

      <div>
        <DWButton deposit={deposit} />
      </div>
    </TransferPageWrapper>
  );
};

export default TransferPage;
