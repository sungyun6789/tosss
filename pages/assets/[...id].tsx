import { useRouter } from 'next/router';

import mock from '../../mock.json';

import { AssetsHeader, AssetsInfoSection } from './AssetsPage.style';

const AssetsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const data = id ? mock.filter((data) => data.wallet_name === id[1])[0] : undefined;

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
