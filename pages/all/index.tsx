import Link from 'next/link';

import { MENU } from './AllPage.constant';
import { AllPageWrapper, MenuTitle, MenuWrapper } from './AllPage.style';

const AllPage = () => {
  return (
    <AllPageWrapper>
      {MENU.map(({ category, menu }) => (
        <MenuWrapper key={category}>
          <MenuTitle>{category}</MenuTitle>
          {Object.entries(menu).map(([key, value]) => (
            <Link key={key} href={value.url}>
              <a>
                <article>
                  <div>{key}</div>
                </article>
              </a>
            </Link>
          ))}
        </MenuWrapper>
      ))}
    </AllPageWrapper>
  );
};

export default AllPage;
