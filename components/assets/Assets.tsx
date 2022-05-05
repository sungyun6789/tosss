import { assetsSelector } from 'atoms';
import krw from 'utils/krw';

import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { AssetsArticle, AssetsSection, AssetsTitle, AssetsUL } from './Assets.style';

const Assets = () => {
  const router = useRouter();
  const data = useRecoilValue(assetsSelector);

  return (
    <AssetsSection>
      <AssetsArticle>
        <AssetsTitle>자산</AssetsTitle>
        <AssetsUL>
          {data.map(({ wallet_name, bank_name, balance }) => (
            <article key={wallet_name} onClick={() => router.push(`/assets/${bank_name}/${wallet_name}`)}>
              <div>
                <p>Bank Image</p>
                <li>{wallet_name}</li>
              </div>
              <li>{krw(balance)}</li>
            </article>
          ))}
        </AssetsUL>
      </AssetsArticle>
    </AssetsSection>
  );
};

export default Assets;
