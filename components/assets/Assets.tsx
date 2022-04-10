import { useRouter } from 'next/router';

import mock from '../../mock.json';

import { AssetsSection, AssetsTitle, AssetsUL } from './Assets.style';

const Assets = () => {
  const router = useRouter();

  return (
    <AssetsSection>
      <AssetsTitle>자산</AssetsTitle>
      <AssetsUL>
        {mock.map(({ wallet_name, bank_name, balance }) => (
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
