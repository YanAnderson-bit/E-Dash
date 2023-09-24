import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Box, Flex, Avatar, Text, HStack, Image } from '@chakra-ui/react';

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
        <Box height="100vh">
          <Flex
            as="nav"
            bg="white"
            width="100%"
            height="60px"
            boxShadow="md"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            paddingX="50px"
            paddingY="35px"
          >
            <Image alt="logo" src="/icon.jpg" boxSize="50px" />
            <HStack spacing={5}>
              <Text>Yan Anderson</Text>
              <Avatar
                fontWeight="bold"
                color="#52606c"
                bg="#a49ccc"
                name="Yan Anderson"
              />
            </HStack>
          </Flex>
        </Box>
      </main>
    </>
  );
}
