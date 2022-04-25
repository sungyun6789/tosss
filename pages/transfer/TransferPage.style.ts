import styled from '@emotion/styled';

export const TransferPageWrapper = styled.section`
  margin: auto;
  width: 1000px;

  p {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: center;

    input {
      width: 300px;
      height: 50px;
      border: 1px solid #f0f0f0;
      padding: 10px;
      box-sizing: border-box;

      font-size: 18px;
      text-align: right;
      :focus {
        outline: none;
      }
    }
  }
`;
