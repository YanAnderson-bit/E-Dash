import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Especifications() {
  return (
    <HStack w="100%" alignItems="flex-start" spacing={40}>
      <VStack w="100%" spacing={10} alignItems="flex-start">
        <Text color="#333333" fontSize="18px">
          Especificações
        </Text>
        <FormControl>
          <VStack color="primmary.input" spacing={5} alignItems="flex-start">
            <HStack justifyContent="space-between" w="100%">
              <FormLabel>Subtítulo:</FormLabel>
              <Input border="none" bg="#F3F5F6" type="string" />
            </HStack>
            <HStack justifyContent="space-between" w="100%">
              <FormLabel>Informações:</FormLabel>
              <Input border="none" bg="#F3F5F6" type="text" />
            </HStack>
            <HStack justifyContent="space-between" w="100%">
              <FormLabel>Limpeza e cudados:</FormLabel>
              <Input border="none" w="95%" bg="#F3F5F6" type="string" />
            </HStack>
          </VStack>
        </FormControl>
      </VStack>
    </HStack>
  );
}
