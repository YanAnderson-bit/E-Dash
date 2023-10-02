import FormInputError from '@/components/FormInputError';
import { Select, Text, VStack } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export default function Tag() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <VStack spacing={10} alignItems="flex-start">
      <Text color="#333333" fontSize="18px">
        Tag
      </Text>
      <VStack alignItems="flex-start">
        <Select
          w="430px"
          color="primmary.input"
          bg="primmary.bgInput"
          placeholder="Selecionar categorias"
          border="none"
          {...register('tags.0', { required: true })}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        {errors.tags && (
          <FormInputError fontSize="0.8rem">
            Insira a tag do produto
          </FormInputError>
        )}
      </VStack>
    </VStack>
  );
}
