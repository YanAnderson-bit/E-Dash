import Head from 'next/head';
import { Ubuntu } from 'next/font/google';
import LoginForm from '@/components/LoginForm';
import { Box } from '@chakra-ui/react';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Dash</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ubuntu.className}>
        <Box display="flex" justifyContent="center">
          <LoginForm />
        </Box>
      </main>
    </>
  );
}
