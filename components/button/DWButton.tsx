import { DepositButton, DWButtonWrapper, WithdrawalButton } from './DWButton.style';

interface Props {
  deposit: () => void;
  withdrawal: () => void;
  disabled?: boolean;
}

/** Deposit Withdrawal */
const DWButton = ({ deposit, withdrawal, disabled = false }: Props) => {
  return (
    <DWButtonWrapper>
      <DepositButton onClick={deposit} disabled={disabled}>
        채우기
      </DepositButton>
      <WithdrawalButton onClick={withdrawal} disabled={disabled}>
        보내기
      </WithdrawalButton>
    </DWButtonWrapper>
  );
};

export default DWButton;
