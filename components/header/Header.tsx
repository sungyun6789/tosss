import Link from 'next/link';

import { Logo, Nav, NavWrapper } from './Header.style';

const Header = () => {
  return (
    <header>
      <NavWrapper>
        <Nav>
          <Logo>LOGO</Logo>

          <article>
            <Link href="/">
              <a>혜택</a>
            </Link>

            <Link href="/">
              <a>송금</a>
            </Link>

            <Link href="/">
              <a>주식</a>
            </Link>

            <Link href="/">
              <a>전체</a>
            </Link>
          </article>
        </Nav>
      </NavWrapper>
    </header>
  );
};

export default Header;
