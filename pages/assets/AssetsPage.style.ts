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

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }

  span {
    display: flex;
    justify-content: flex-end;

    color: gray;
    text-decoration: underline;

    cursor: pointer;
  }

  .balance {
    font-size: 30px;
  }
`;
