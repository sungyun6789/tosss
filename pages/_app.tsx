import Layout from '@components/layout/Layout';

import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import GlobalStyle from '../styles/global.style';

const app = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  </RecoilRoot>
);

export default app;
