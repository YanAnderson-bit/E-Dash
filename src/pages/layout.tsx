import { Box } from '@chakra-ui/react';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '400' });

export default function Layout({ children }: any) {
  return (
    <Box
      className={ubuntu.className}
      bgColor="#F6F6F9"
      bgImage="/background.png"
    >
      {children}
    </Box>
  );
}
