import Assets from '@components/assets/Assets';
import SponsoredButton from '@components/button/SponsoredButton';

import type { NextPage } from 'next';

const index: NextPage = () => {
  return (
    <>
      <Assets />
      <SponsoredButton />
    </>
  );
};

export default index;
