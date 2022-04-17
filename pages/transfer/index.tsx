import DWButton from '@components/button/DWButton';
import BankSelector from '@components/select/BankSelector';

import { TransferPageWrapper } from './TransferPage.style';

const TransferPage = () => {
  const deposit = () => undefined;
  const withdrawal = () => undefined;

  return (
    <TransferPageWrapper>
      <BankSelector />
      <div>
        <DWButton deposit={deposit} withdrawal={withdrawal} />
      </div>
    </TransferPageWrapper>
  );
};

export default TransferPage;
