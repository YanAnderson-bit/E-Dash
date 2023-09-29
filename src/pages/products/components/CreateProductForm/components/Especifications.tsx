import FormInput from '@/components/FormInput';
import {
  FormControl,
  FormLabel,
  HStack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';

export default function Especifications() {
  return (
    <VStack w="100%" spacing={10} alignItems="flex-start">
      <Text color="#333333" fontSize="18px">
        Especificações
      </Text>
      <FormControl>
        <VStack color="primmary.input" spacing={5} alignItems="flex-start">
          <HStack gap={10} w="100%">
            <FormLabel>Subtítulo:</FormLabel>
            <FormInput />
          </HStack>
          <HStack gap={4} w="100%">
            <FormLabel>Informações:</FormLabel>
            <Textarea bg="primmary.bgInput" border="none" borderRadius="9px" />
          </HStack>
          <HStack gap={9} w="100%">
            <FormLabel w="80px" h="42px">
              Limpeza e cudados:
            </FormLabel>
            <Textarea bg="primmary.bgInput" border="none" borderRadius="9px" />
          </HStack>
        </VStack>
      </FormControl>
    </VStack>
  );
}
