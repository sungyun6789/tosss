import styled from '@emotion/styled';

export const NavWrapper = styled.section`
  width: 100%;
  height: 60px;

  a {
    color: #4e5968;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  max-width: 1140px;
  height: 100%;
  margin: auto;

  article {
    width: 92%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;

    div {
      padding: 12px 20px;
      cursor: pointer;
      :hover {
        border-radius: 8px;
        background-color: #f0f0f0;
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;