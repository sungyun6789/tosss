import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo-toss-blue.png';

import { Nav, NavWrapper } from './Header.style';

const Header = () => {
  return (
    <header>
      <NavWrapper>
        <Nav>
          <Link href="/">
            <a>
              <Image src={logo} width={100} height={55} />
            </a>
          </Link>

          <article>
            <div>
              <Link href="/tossbank">
                <a>토스뱅크</a>
              </Link>
            </div>

            <div>
              <Link href="/benefits">
                <a>혜택</a>
              </Link>
            </div>

            <div>
              <Link href="/transfer">
                <a>송금</a>
              </Link>
            </div>

            <div>
              <Link href="/stock">
                <a>주식</a>
              </Link>
            </div>

            <div>
              <Link href="/all">
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
