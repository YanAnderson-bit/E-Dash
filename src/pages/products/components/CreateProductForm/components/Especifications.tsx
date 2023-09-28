import FormInput from '@/components/FormInput';
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
    <VStack w="100%" spacing={10} alignItems="flex-start">
      <Text color="#333333" fontSize="18px">
        Especificações
      </Text>
      <FormControl>
        <VStack color="primmary.input" spacing={5} alignItems="flex-start">
          <HStack gap={10} w="100%">
            <FormLabel>Subtítulo:</FormLabel>
            <FormInput w="1522px" />
          </HStack>
          <HStack gap={4} w="100%">
            <FormLabel>Informações:</FormLabel>
            <FormInput w="1522px" h="84px" />
          </HStack>
          <HStack gap={7} w="100%">
            <FormLabel w="80px" h="42px">
              Limpeza e cudados:
            </FormLabel>
            <FormInput w="1522px" h="84px" />
          </HStack>
        </VStack>
      </FormControl>
    </VStack>
  );
}
