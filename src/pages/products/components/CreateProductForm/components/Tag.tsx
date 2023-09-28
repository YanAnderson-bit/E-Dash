import { Select, Text, VStack } from '@chakra-ui/react';

export default function Tag() {
  return (
    <VStack spacing={10} alignItems="flex-start">
      <Text color="#333333" fontSize="18px">
        Tag
      </Text>
      <Select
        w="430px"
        color="primmary.input"
        bg="primmary.bgInput"
        placeholder="Selecionar categorias"
        border="none"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </VStack>
  );
}
