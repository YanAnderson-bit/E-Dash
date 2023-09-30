import { Box, HStack, VStack } from '@chakra-ui/react';
import Details from './components/Details';
import Category from './components/Category';
import Tag from './components/Tag';
import Especifications from './components/Especifications';

export default function CreateProductForm() {
  return (
    <Box bg="white" p="40px" borderRadius="20px">
      <VStack alignItems="flex-start" spacing={20}>
        <HStack alignItems="flex-start" spacing={40}>
          <Details />
          <Category />
          <Tag />
        </HStack>
        <Especifications />
      </VStack>
    </Box>
  );
}
