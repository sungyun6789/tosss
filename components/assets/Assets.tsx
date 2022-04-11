import { AssetsInfoState } from 'atoms';

import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { AssetsSection, AssetsTitle, AssetsUL } from './Assets.style';

const Assets = () => {
  const router = useRouter();
  const assetsInfo = useRecoilValue(AssetsInfoState);

  return (
    <AssetsSection>
      <AssetsTitle>자산</AssetsTitle>
      <AssetsUL>
        {assetsInfo.map(({ wallet_name, bank_name, balance }) => (
          <article key={wallet_name} onClick={() => router.push(`/assets/${bank_name}/${wallet_name}`)}>
            <div>
              <p className="logo">Bank Image</p>
              <li className="name">{wallet_name}</li>
            </div>
            <li className="balance">{balance}</li>
          </article>
        ))}
      </AssetsUL>
    </AssetsSection>
  );
};

export default Assets;
