import styled from '@emotion/styled';

export const DWButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 300px;

  button {
    height: 40px;
    width: 140px;

    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 10px;
    transition: 0.3s;

    margin-top: 20px;
  }
`;

export const DepositButton = styled.button`
  :not(:disabled) {
    color: white;
    background-color: #2196f3;
    cursor: pointer;
    :hover {
      background-color: #1565c0;
    }
  }
`;
