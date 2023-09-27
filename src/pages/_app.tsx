import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from './Layout';
import AuthenticationProvider from '@/providers/AuthenticationProvider';
import fontTheme from '@/theme/fontTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={fontTheme}>
      <AuthenticationProvider>
        <Layout>
          <Head>
            <title>E-Dash</title>
            <meta name="description" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </AuthenticationProvider>
    </ChakraProvider>
  );
}
