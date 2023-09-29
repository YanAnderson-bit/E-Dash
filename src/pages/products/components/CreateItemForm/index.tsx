import { AiOutlinePlus } from 'react-icons/ai';
import {
  Box,
  Button,
  FormLabel,
  HStack,
  IconButton,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import FormInput from '@/components/FormInput';
import { useFormContext } from 'react-hook-form';

export default function CreateItemForm() {
  const { register } = useFormContext();
  return (
    <Box mt="2rem" bg="white" p="40px" borderRadius="20px">
      <VStack alignItems="flex-start" spacing={4}>
        <HStack w="100%" justifyContent="space-between" spacing={40}>
          <Text color="#333333" fontSize="18px">
            Itens
          </Text>
          <Button bg="none" leftIcon={<AiOutlinePlus />}>
            Adicionar
          </Button>
        </HStack>
        <HStack justifyContent="space-between" w="100%">
          <Text color="#333333" fontSize="16px">
            Item 1
          </Text>
          <Box borderWidth="0.1rem" w="95%" />
        </HStack>
      </VStack>
      <HStack spacing={10} alignItems="flex-start" mt="2rem">
        <VStack spacing={15}>
          <HStack justifyContent="space-between" w="100%">
            <FormLabel>Código:</FormLabel>
            <FormInput name="items.0.code" w="20rem" h="37px" />
          </HStack>
          <HStack justifyContent="space-between" w="100%">
            <FormLabel>Cor:</FormLabel>
            <Select
              placeholder="Selecione uma cor"
              border="none"
              bg="primmary.bgInput"
              w="20rem"
              h="37px"
              color="primmary.input"
              {...register('items.0.color')}
            >
              <option value="color 1">color1</option>
              <option value="color 2">color2</option>
              <option value="color 3">color3</option>
            </Select>
          </HStack>
          <HStack justifyContent="space-between" w="100%">
            <FormLabel>Tamanho:</FormLabel>
            <FormInput name="items.0.size.width1" w="3.7rem" h="2.5rem" />
            <FormLabel>m x</FormLabel>
            <FormInput name="items.0.size.width2" w="3.7rem" h="2.5rem" />
            <FormLabel>m x</FormLabel>
            <FormInput name="items.0.size.width3" w="3.7rem" h="2.5rem" />
            <FormLabel>m</FormLabel>
          </HStack>
        </VStack>
        <HStack spacing={10} alignItems="flex-start">
          <FormLabel>Imagens:</FormLabel>
          <IconButton
            aria-label="add"
            icon={<AiOutlinePlus />}
            bg="#C0D7E5"
            p="3rem"
          />
        </HStack>
      </HStack>
    </Box>
  );
}
