import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default function Layout({ children }: any) {
  return (
    <Box bgColor="#F6F6F9" bgImage="/background.png">
      {children}
    </Box>
  );
}
