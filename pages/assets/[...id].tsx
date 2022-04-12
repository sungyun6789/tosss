import DWButton from '@components/button/DWButton';
import { AssetsInfoState } from 'atoms';
import copy from 'utils/copy';

import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { AssetsHeader, AssetsInfoSection } from './AssetsPage.style';

const AssetsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const assetsInfo = useRecoilValue(AssetsInfoState);

  const data = id ? assetsInfo.filter(({ wallet_name }) => wallet_name === id[1])[0] : undefined;

  return data ? (
    <>
      <AssetsHeader>{`${data.bank_name} ${data.wallet_name}`}</AssetsHeader>
      <AssetsInfoSection>
        <span onClick={() => copy(data.address)}>{data.address}</span>
        <p className="balance">{data.balance}</p>
      </AssetsInfoSection>
      {data.transfer ? <DWButton /> : null}
    </>
  ) : null;
};

export default AssetsPage;
