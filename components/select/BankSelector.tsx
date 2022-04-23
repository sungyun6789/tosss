import type { AssetsModel } from 'atoms';

import { BankSelectorWrapper } from './BankSelector.style';

interface Props {
  transferAssets: AssetsModel[];
  select?: string;
  setSelect: (select?: string) => void;
}

const BankSelector = ({ transferAssets, select, setSelect }: Props) => {
  return (
    <>
      <BankSelectorWrapper>
        {transferAssets.map(({ wallet_name, balance }) => (
          <article
            key={wallet_name}
            className={select === wallet_name ? 'match' : undefined}
            onClick={() => setSelect(wallet_name === select ? undefined : wallet_name)}
          >
            <div>{wallet_name}</div>
            <div>{balance.toLocaleString('ko-KR')}</div>
          </article>
        ))}
      </BankSelectorWrapper>
    </>
  );
};

export default BankSelector;
