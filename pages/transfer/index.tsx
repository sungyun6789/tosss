import DWButton from '@components/button/DWButton';

import { TransferPageWrapper } from './TransferPage.style';

const TransferPage = () => {
  const deposit = () => undefined;
  const withdrawal = () => undefined;

  return (
    <TransferPageWrapper>
      <div>
        <DWButton deposit={deposit} withdrawal={withdrawal} />
      </div>
    </TransferPageWrapper>
  );
};

export default TransferPage;
