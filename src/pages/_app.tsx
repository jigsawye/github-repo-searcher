import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '@formatjs/intl-numberformat/polyfill';

import { GlobalStyle } from '../components/GlobalStyle';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
