import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box bgColor="#F6F6F9" bgImage="/images/background.png">
      <Header />
      {children}
    </Box>
  );
}
