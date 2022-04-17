import styled from '@emotion/styled';

export const AssetsHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-bottom: 50px;
`;

export const AssetsInfoSection = styled.section`
  width: 1000px;
  margin: auto;

  span {
    display: flex;
    justify-content: flex-end;

    color: gray;
    text-decoration: underline;

    cursor: pointer;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    div {
      flex: 1;
    }

    .isTransfer {
      display: flex;
      justify-content: center;
    }

    .balance {
      display: flex;
      justify-content: flex-end;
      font-size: 30px;
    }
  }
`;
