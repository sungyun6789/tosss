import styled from '@emotion/styled';

export const TransferPageWrapper = styled.section`
  margin: auto;
  width: 1000px;

  div {
    display: flex;
    justify-content: center;

    input {
      width: 280px;
      height: 40px;
      border: 1px solid #f0f0f0;
      padding: 0 10px;

      font-size: 18px;
      text-align: right;
      :focus {
        outline: none;
      }
    }
  }
`;
