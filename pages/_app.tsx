import Layout from '@components/layout/Layout';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import GlobalStyle from '../styles/global.style';

const app = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Layout>
      <GlobalStyle />
      <Head>
        <title>Tosss</title>
        <link rel="shortcut icon" href="https://static.toss.im/tds/favicon/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  </RecoilRoot>
);

export default app;
