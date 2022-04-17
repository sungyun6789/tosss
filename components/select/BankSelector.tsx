import { AssetsModel } from 'atoms';

import { BankSelectorWrapper } from './BankSelector.style';

interface Props {
  transferAssets: AssetsModel[];
  setSelect: (select: string) => void;
}

const BankSelector = ({ transferAssets, setSelect }: Props) => {
  return (
    <BankSelectorWrapper>
      {transferAssets.map(({ wallet_name, balance }) => (
        <div key={wallet_name} onClick={() => setSelect(wallet_name)}>
          <div>{wallet_name}</div>
          <div>{balance.toLocaleString('ko-KR')}</div>
        </div>
      ))}
    </BankSelectorWrapper>
  );
};

export default BankSelector;
