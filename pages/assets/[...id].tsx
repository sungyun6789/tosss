import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import mock from '../../mock.json';

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

const AssetsHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-bottom: 50px;
`;

const AssetsInfoSection = styled.section`
  width: 1000px;
  margin: auto;

  span {
    display: flex;
    justify-content: flex-end;

    color: gray;
    text-decoration: underline;
  }
  p {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;

    font-size: 30px;
  }
`;
