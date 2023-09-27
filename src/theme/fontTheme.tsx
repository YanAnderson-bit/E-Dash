import { extendTheme } from '@chakra-ui/react';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const fontTheme = extendTheme({
  fonts: {
    body: ubuntu.style.fontFamily,
    heading: ubuntu.style.fontFamily,
  },
});

export default fontTheme;
