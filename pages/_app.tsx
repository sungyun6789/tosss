import Layout from '@components/layout/Layout';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import favicon from '../public/favicon.ico';
import GlobalStyle from '../styles/global.style';

const app = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Layout>
      <GlobalStyle />
      <Head>
        <title>Tosss</title>
        <link rel="icon" href={favicon.src} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  </RecoilRoot>
);

export default app;
