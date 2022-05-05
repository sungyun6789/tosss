import styled from '@emotion/styled';

export const TossBankWrapper = styled.section`
  display: flex;
  justify-content: center;
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
    margin-top: 50px;
  }

  ul {
    margin-top: 50px;
  }

  li {
    margin-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;

    p {
      display: flex;
      justify-content: center;
      color: gray;
    }

    span {
      display: flex;
      justify-content: right;
      margin-bottom: 5px;
      padding-right: 10px;
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
  width: 350px;
  height: 350px;
  border: 1px solid #f0f0f0;
  border-radius: 30px;
  box-sizing: border-box;
  margin: 10px;

  p {
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #f0f0f0;
    color: var(--tossLightColor);
    transition: 0.5s;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    cursor: pointer;
    :hover {
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
      background-color: #f0f0f0;
    }
  }
`;
