import { AssetsModel } from 'atoms';

import { BankSelectorWrapper } from './BankSelector.style';

interface Props {
  transferAssets: AssetsModel[];
  setSelect: (select: string) => void;
}

const BankSelector = ({ transferAssets, setSelect }: Props) => {
  return (
    <BankSelectorWrapper>
      <select onChange={(e) => setSelect(e.target.value)}>
        <option value="">계좌를 선택하세요.</option>
        {transferAssets.map(({ wallet_name }) => (
          <option key={wallet_name} value={wallet_name}>
            {wallet_name}
          </option>
        ))}
      </select>
    </BankSelectorWrapper>
  );
};

export default BankSelector;
