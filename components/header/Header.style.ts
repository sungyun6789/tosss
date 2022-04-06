import styled from '@emotion/styled';

export const NavWrapper = styled.section`
  width: 100%;
  height: 60px;

  a {
    color: #4e5968;
    font-size: 15px;
    padding: 20px;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  display: flex;
  max-width: 1140px;
  height: 100%;
  margin: auto;

  article {
    width: 92%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
