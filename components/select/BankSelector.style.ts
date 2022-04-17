import styled from '@emotion/styled';

export const BankSelectorWrapper = styled.section`
  width: 300px;
  border: 1px solid #f0f0f0;
  margin-top: 30px;

  div {
    display: flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
    :hover {
      background-color: #f0f0f0;
    }
  }

  .match {
    background-color: #f0f0f0;
  }
`;
