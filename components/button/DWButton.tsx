import { DWButtonWrapper } from './DWButton.style';

/** Deposit Withdrawal */
const DWButton = () => {
  return (
    <DWButtonWrapper>
      <button className="deposit">채우기</button>
      <button className="withdrawal">보내기</button>
    </DWButtonWrapper>
  );
};

export default DWButton;
