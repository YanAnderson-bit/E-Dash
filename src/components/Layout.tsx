import { Box, HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box bgColor="#F6F6F9" bgImage="/images/background.png">
      <Header />
      <HStack maxW="87%" alignItems="flex-start" spacing={10}>
        <Sidebar />
        {children}
      </HStack>
    </Box>
  );
}
