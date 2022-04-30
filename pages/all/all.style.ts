import styled from '@emotion/styled';

export const AllPageWrapper = styled.section`
  width: 1000px;
  margin: auto;
`;

export const MenuWrapper = styled.div`
  border-bottom: 1px solid #f0f0f0;
  article {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    div {
      padding-left: 20px;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export const MenuTitle = styled.h3`
  padding: 20px 0;
  font-size: 20px;
  font-weight: bold;
`;

export const DetailWrapper = styled.section`
  text-align: center;

  h1 {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;
