import styled from '@emotion/styled';

export const BankSelectorWrapper = styled.section`
  width: 300px;
  border: 1px solid #f0f0f0;
  margin-top: 30px;

  article {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 50px;
    cursor: pointer;
    :hover {
      background-color: #f0f0f0;
    }

    div {
      width: 50%;
    }
  }

  .match {
    background-color: #f0f0f0;
  }
`;
