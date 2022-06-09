import Script from 'next/script';
import type { AppProps } from 'next/app';

import { Partytown } from '@builder.io/partytown/react';

export const config = { amp: 'true', unstable_runtimeJS: false };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Partytown debug={true} forward={['dataLayer.push']} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
