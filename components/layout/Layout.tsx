import type { PropsWithChildren } from 'react';

import Header from '@components/header';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
