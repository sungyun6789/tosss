import Layout from '@components/layout/Layout';

import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global.style';

const app = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <GlobalStyle />
    <Component {...pageProps} />
  </Layout>
);

export default app;
