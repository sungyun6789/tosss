import { MENU } from './all.constant';
import { AllPageWrapper, MenuTitle, MenuWrapper } from './all.style';

const AllPage = () => {
  return (
    <AllPageWrapper>
      {MENU.map(({ category, menu }) => (
        <MenuWrapper key={category}>
          <MenuTitle>{category}</MenuTitle>
          {Object.entries(menu).map(([key]) => (
            <article key={key}>
              <div>{key}</div>
            </article>
          ))}
        </MenuWrapper>
      ))}
    </AllPageWrapper>
  );
};

export default AllPage;
