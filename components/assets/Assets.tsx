import { AssetsSection, AssetsTitle, AssetsUL } from './Assets.style';
import mock from './mock.json';

const Assets = () => {
  return (
    <AssetsSection>
      <AssetsTitle>자산</AssetsTitle>
      <AssetsUL>
        {mock.map(({ name, balance }) => (
          <article key={name}>
            <div>
              <p className="logo">Bank Image</p>
              <li className="name">{name}</li>
            </div>
            <li className="balance">{balance}</li>
          </article>
        ))}
      </AssetsUL>
    </AssetsSection>
  );
};

export default Assets;
