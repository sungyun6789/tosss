import { MENU } from './all.constant';
import { AllPageWrapper, MenuTitle, MenuWrapper } from './all.style';

const AllPage = () => {
  return (
    <AllPageWrapper>
      {MENU.map((value) => (
        <MenuWrapper key={value.category}>
          <MenuTitle>{value.category}</MenuTitle>
        </MenuWrapper>
      ))}
    </AllPageWrapper>
  );
};

export default AllPage;
