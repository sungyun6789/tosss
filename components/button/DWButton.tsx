import { DWButtonWrapper } from './DWButton.style';

interface Props {
  deposit: () => void;
  withdrawal: () => void;
}

/** Deposit Withdrawal */
const DWButton = ({ deposit, withdrawal }: Props) => {
  return (
    <DWButtonWrapper>
      <button className="deposit" onClick={deposit}>
        채우기
      </button>
      <button className="withdrawal" onClick={withdrawal}>
        보내기
      </button>
    </DWButtonWrapper>
  );
};

export default DWButton;
