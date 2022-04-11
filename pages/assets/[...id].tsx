import { AssetsInfoState } from 'atoms';

import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { AssetsHeader, AssetsInfoSection } from './AssetsPage.style';

const AssetsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const assetsInfo = useRecoilValue(AssetsInfoState);

  const data = id ? assetsInfo.filter(({ wallet_name }) => wallet_name === id[1])[0] : undefined;

  return (
    <>
      <AssetsHeader>{`${data?.bank_name} ${data?.wallet_name}`}</AssetsHeader>
      <AssetsInfoSection>
        <span>{data?.address}</span>
        <p className="balance">{data?.balance}</p>
      </AssetsInfoSection>
    </>
  );
};

export default AssetsPage;
