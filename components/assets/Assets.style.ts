import styled from '@emotion/styled';

export const AssetsSection = styled.section`
  max-width: 800px;
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
    height: 60px;

    transition: 0.3s;
    cursor: pointer;
    :hover {
      background-color: #fafafa;
      border-radius: 15px;
    }
  }

  div {
    width: 50%;
    text-align: center;

    li {
      width: 100%;
      color: gray;
      text-align: center;
    }
  }

  li {
    width: 50%;
    text-align: center;
  }
`;
