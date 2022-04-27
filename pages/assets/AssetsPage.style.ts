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

  div {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    font-size: 30px;
  }
`;

export const AsstesDetailSection = styled.section`
  width: 700px;
  margin: auto;
  font-size: 16px;

  article {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f0f0f0;
    margin-bottom: 10px;
    padding: 0 30px;
  }
`;
