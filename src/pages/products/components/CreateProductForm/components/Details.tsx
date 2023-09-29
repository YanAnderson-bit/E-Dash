import FormInput from '@/components/FormInput';
import { FormControl, FormLabel, HStack, Text, VStack } from '@chakra-ui/react';

export default function Details() {
  return (
    <VStack spacing={10} alignItems="flex-start">
      <Text color="#333333" fontSize="18px">
        Detalhes
      </Text>
      <FormControl>
        <VStack color="primmary.input" spacing={5} alignItems="flex-start">
          <HStack gap={10} justifyContent="space-between" w="100%">
            <FormLabel>Nome:</FormLabel>
            <FormInput w="20rem" h="37px" />
          </HStack>
          <HStack justifyContent="space-between" w="100%">
            <FormLabel>ID:</FormLabel>
            <FormInput w="20rem" h="37px" />
          </HStack>
          <HStack justifyContent="space-between" w="100%">
            <FormLabel>Código:</FormLabel>
            <FormInput w="20rem" h="37px" />
          </HStack>
          <HStack justifyContent="space-between" w="100%">
            <FormLabel>Seller:</FormLabel>
            <FormInput w="20rem" h="37px" />
          </HStack>
          <HStack justifyContent="space-between">
            <FormLabel>Prazo de entrega:</FormLabel>
            <FormInput w="20rem" h="37px" />
          </HStack>
        </VStack>
      </FormControl>
    </VStack>
  );
}
