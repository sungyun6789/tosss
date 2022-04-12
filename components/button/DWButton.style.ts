import styled from '@emotion/styled';

export const DWButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 260px;

  button {
    height: 40px;
    width: 120px;

    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
  }

  .deposit {
    color: #2196f3;
    background-color: #e3f2fd;
    :hover {
      background-color: #bbdefb;
    }
  }

  .withdrawal {
    color: white;
    background-color: #2196f3;
    :hover {
      background-color: #1565c0;
    }
  }
`;
