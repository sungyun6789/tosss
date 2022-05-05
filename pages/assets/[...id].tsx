import { assetsState } from 'atoms';
import copy from 'utils/copy';
import krw from 'utils/krw';

import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import {
  AssetsHeader,
  AssetsInfoSection,
  AsstesDetailSection,
  DetailBalance,
  DetailDate,
  DetailName,
} from './AssetsPage.style';

const AssetsPage = () => {
  const router = useRouter();
  const id = router.query.id?.[1];
  const assets = useRecoilValue(assetsState).filter(({ wallet_name }) => wallet_name === id)[0];

  if (!id) return null;

  if (!assets || !id) return null;

  const headerText =
    assets.bank_name === assets.wallet_name ? assets.bank_name : `${assets.bank_name} ${assets.wallet_name}`;

  return (
    <>
      <AssetsHeader>{headerText}</AssetsHeader>
      <AssetsInfoSection>
        <span onClick={() => copy(assets.address)}>{assets.address}</span>
        <article>
          <div>{krw(assets.balance)}</div>
        </article>
      </AssetsInfoSection>
      {assets.details && (
        <AsstesDetailSection>
          {assets.details.map((data) => (
            <article key={data.id}>
              <div>
                <DetailName>{data.name}</DetailName>
                <DetailDate>{data.date}</DetailDate>
              </div>
              <DetailBalance type={data.type}>{krw(data.balance)}</DetailBalance>
            </article>
          ))}
        </AsstesDetailSection>
      )}
    </>
  );
};

export default AssetsPage;
