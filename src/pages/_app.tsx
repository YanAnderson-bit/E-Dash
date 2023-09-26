import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import Layout from './Layout';
import Head from 'next/head';
import AuthenticationProvider from '@/providers/AuthenticationProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
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
