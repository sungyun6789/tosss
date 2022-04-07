import { PropsWithChildren } from 'react';

import Header from '@components/header/Header';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
