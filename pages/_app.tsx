import { NextPage } from 'next';
import { AppProps } from 'next/app';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
