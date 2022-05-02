import styled from '@emotion/styled';

export const TossBankWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 1000px;
  margin: auto;

  h1 {
    font-size: 25px;
    text-align: center;
    padding: 20px;
  }

  h3 {
    font-size: 20px;
    text-align: center;
    padding: 20px;
  }

  ul {
    margin-top: 50px;
  }

  li {
    margin-bottom: 20px;
    height: 50px;
    border-bottom: 1px solid #f0f0f0;

    p {
      display: flex;
      justify-content: center;
    }

    span {
      display: flex;
      justify-content: right;
    }
  }
`;

export const TossBankImage = styled.article`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
`;

export const TossBankInfo = styled.article`
  text-align: center;
  padding: 10px;
  p,
  span {
    padding: 10px;
  }

  span {
    font-size: 25px;
    font-weight: bold;
  }
`;

export const TossBankBox = styled.article`
  width: 400px;
  height: 400px;
  border: 1px solid #f0f0f0;
  border-radius: 30px;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 20px;
`;
