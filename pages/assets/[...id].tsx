import { assetsState } from 'atoms';
import copy from 'utils/copy';
import krw from 'utils/krw';

import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { AssetsHeader, AssetsInfoSection, AsstesDetailSection } from './AssetsPage.style';

const AssetsPage = () => {
  const assets = useRecoilValue(assetsState);
  const router = useRouter();
  const id = router.query.id?.[1];

  if (!id) return null;

  const matchData = assets.filter(({ wallet_name }) => wallet_name === id)[0];

  if (!matchData || !id) return null;

  const headerText =
    matchData.bank_name === matchData.wallet_name
      ? matchData.bank_name
      : `${matchData.bank_name} ${matchData.wallet_name}`;

  return (
    <>
      <AssetsHeader>{headerText}</AssetsHeader>
      <AssetsInfoSection>
        <span onClick={() => copy(matchData.address)}>{matchData.address}</span>
        <article>
          <div>{krw(matchData.balance)}</div>
        </article>
      </AssetsInfoSection>
      {matchData.details && (
        <AsstesDetailSection>
          {matchData.details.map((data) => (
            <article key={data.id}>
              <div>
                <div>{data.name}</div>
                <div>{data.date}</div>
              </div>
              <div>{krw(data.balance)}</div>
            </article>
          ))}
        </AsstesDetailSection>
      )}
    </>
  );
};

export default AssetsPage;
