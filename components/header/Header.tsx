import Link from 'next/link';

import { Logo, Nav, NavWrapper } from './Header.style';

const Header = () => {
  return (
    <header>
      <NavWrapper>
        <Nav>
          <Logo>
            <Link href="/">
              <a>LOGO</a>
            </Link>
          </Logo>

          <article>
            <div>
              <Link href="/">
                <a>혜택</a>
              </Link>
            </div>

            <div>
              <Link href="/">
                <a>송금</a>
              </Link>
            </div>

            <div>
              <Link href="/">
                <a>주식</a>
              </Link>
            </div>

            <div>
              <Link href="/">
                <a>전체</a>
              </Link>
            </div>
          </article>
        </Nav>
      </NavWrapper>
    </header>
  );
};

export default Header;
