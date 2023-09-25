import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Box, Flex, Avatar, Text, HStack, Image } from '@chakra-ui/react';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Dash</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Header />
      </main>
    </>
  );
}
