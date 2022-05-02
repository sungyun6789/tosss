import styled from '@emotion/styled';

export const AdminPageWrapper = styled.section`
  width: 1000px;
  margin: auto;

  article {
    display: flex;
    justify-content: center;
  }

  input,
  button {
    width: 250px;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    margin-bottom: 30px;
    font-size: 16px;
  }

  input {
    text-align: right;
  }

  button {
    color: white;
    background-color: #2196f3;
    transition: 0.3s;
    cursor: pointer;
    :hover {
      background-color: #1565c0;
    }
  }
`;
