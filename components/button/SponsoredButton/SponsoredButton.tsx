import TossButton from '../TossButton';

import { SponsoredButtonWrapper } from './SponsoredButton.style';

const SponsoredButton = () => {
  return (
    <SponsoredButtonWrapper>
      <a target="_blank" href="https://toss.me/sungyun67" rel="noreferrer">
        <TossButton text="νμνκΈ°" />
      </a>
    </SponsoredButtonWrapper>
  );
};

export default SponsoredButton;
