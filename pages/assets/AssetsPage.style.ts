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
  }
  p {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;

    font-size: 30px;
  }
`;
