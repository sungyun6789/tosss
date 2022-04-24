import styled from '@emotion/styled';

export const BankSelectorWrapper = styled.section`
  width: 300px;
  border: 1px solid #f0f0f0;
  margin-bottom: 30px;

  article {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 50px;
    cursor: pointer;
    div {
      width: 50%;
    }
  }

  .match {
    background-color: #f0f0f0;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 300px;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 25px;
  }

  li {
    background-color: rgba(214, 214, 214, 0.5);
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
  }

  li:last-child {
    margin-bottom: 0px;
  }
`;
