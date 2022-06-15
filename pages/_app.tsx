import '../styles/globals.css'
import Script from 'next/script';
import '../styles/globals.css'
import type { AppProps } from 'next/app';

import { Partytown } from '@builder.io/partytown/react';
import { Layout } from '../components/Layout';

export const config = { amp: 'true', unstable_runtimeJS: false };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Partytown debug={true} forward={['dataLayer.push']} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
