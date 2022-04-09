import styled from '@emotion/styled';

export const AssetsSection = styled.section`
  width: 800px;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 15px;
  margin: auto;
`;

export const AssetsTitle = styled.article`
  font-size: 20px;
  font-weight: 500;
  margin: 15px;
`;

export const AssetsUL = styled.ul`
  article {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    margin-bottom: 30px;
  }

  div {
    width: 200px;

    .name {
      color: gray;
    }
  }

  .balance {
    width: 200px;
  }
`;
