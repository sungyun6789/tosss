import { DepositButton, DWButtonWrapper } from './DWButton.style';

interface Props {
  deposit: () => void;

  disabled?: boolean;
}

/** Deposit Withdrawal */
const DWButton = ({ deposit, disabled = false }: Props) => {
  return (
    <DWButtonWrapper>
      <DepositButton onClick={deposit} disabled={disabled}>
        송금
      </DepositButton>
    </DWButtonWrapper>
  );
};

export default DWButton;
