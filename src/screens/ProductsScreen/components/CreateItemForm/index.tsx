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
import { useFieldArray, useFormContext } from 'react-hook-form';
import { IoCloseOutline } from 'react-icons/io5';

export default function CreateItemForm() {
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ name: 'items' });

  return (
    <Box mt="2rem" bg="white" p="40px" borderRadius="20px">
      <VStack alignItems="flex-start" spacing={4}>
        <HStack w="100%" justifyContent="space-between" spacing={40}>
          <Text color="#333333" fontSize="18px">
            Itens
          </Text>
          <Button
            onClick={() => {
              append({});
            }}
            bg="none"
            leftIcon={<AiOutlinePlus />}
          >
            Adicionar
          </Button>
        </HStack>
      </VStack>
      <VStack spacing={10} alignItems="flex-start" mt="2rem">
        {fields.map((item, index) => (
          <VStack w="100%" alignItems="flex-start" spacing={10} key={item.id}>
            <HStack justifyContent="space-between" w="100%">
              <Text color="#333333" fontSize="16px">
                Item {index + 1}
              </Text>
              <Box borderWidth="0.1rem" w="90%" />
              <IconButton
                size="lg"
                bg="none"
                aria-label="closeItem"
                icon={<IoCloseOutline />}
                onClick={() => remove(index)}
              />
            </HStack>

            <HStack key={item.id} alignItems="flex-start" spacing={20}>
              <VStack spacing={15}>
                <HStack justifyContent="space-between" w="100%">
                  <FormLabel>Código:</FormLabel>
                  <FormInput name={`items.${index}.code`} w="20rem" h="37px" />
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
                    {...register(`items.${index}.color`)}
                  >
                    <option value="color 1">color1</option>
                    <option value="color 2">color2</option>
                    <option value="color 3">color3</option>
                  </Select>
                </HStack>
                <HStack justifyContent="space-between" w="100%">
                  <FormLabel>Tamanho:</FormLabel>
                  <FormInput
                    name={`items.${index}.size.width`}
                    w="3.7rem"
                    h="2.5rem"
                  />
                  <FormLabel>m x</FormLabel>
                  <FormInput
                    name={`items.${index}.size.height`}
                    w="3.7rem"
                    h="2.5rem"
                  />
                  <FormLabel>m x</FormLabel>
                  <FormInput
                    name={`items.${index}.size.length`}
                    w="3.7rem"
                    h="2.5rem"
                  />
                  <FormLabel>m</FormLabel>
                </HStack>
              </VStack>
              <HStack spacing={20} alignItems="flex-start">
                <FormLabel>Imagens:</FormLabel>
                <IconButton
                  aria-label="add"
                  icon={<AiOutlinePlus />}
                  bg="#C0D7E5"
                  p="3rem"
                />
              </HStack>
            </HStack>
          </VStack>
        ))}
      </VStack>
    </Box>
  );
}
