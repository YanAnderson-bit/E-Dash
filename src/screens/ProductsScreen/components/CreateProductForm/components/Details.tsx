import FormInput from '@/components/FormInput';
import FormInputError from '@/components/FormInputError';
import { FormControl, FormLabel, HStack, Text, VStack } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export default function Details() {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <VStack spacing={10} alignItems="flex-start">
      <Text color="#333333" fontSize="18px">
        Detalhes
      </Text>
      <FormControl>
        <VStack color="primmary.input" spacing={5} alignItems="flex-start">
          <VStack alignItems="flex-start" w="100%">
            <HStack gap={10} justifyContent="space-between" w="100%">
              <FormLabel>Nome:</FormLabel>
              <FormInput required name="name" w="20rem" />
            </HStack>
            {errors.name && (
              <FormInputError fontSize="0.8rem" ml="6.5rem">
                Insira o nome do produto
              </FormInputError>
            )}
          </VStack>
          <VStack alignItems="flex-start" w="100%">
            <HStack justifyContent="space-between" w="100%">
              <FormLabel>ID:</FormLabel>
              <FormInput required name="productId" w="20rem" />
            </HStack>
            {errors.productId && (
              <FormInputError fontSize="0.8rem" ml="6.5rem">
                Insira o ID do produto
              </FormInputError>
            )}
          </VStack>
          <VStack alignItems="flex-start" w="100%">
            <HStack justifyContent="space-between" w="100%">
              <FormLabel>Código:</FormLabel>
              <FormInput required name="code" w="20rem" />
            </HStack>
            {errors.code && (
              <FormInputError fontSize="0.8rem" ml="6.5rem">
                Insira o código do produto
              </FormInputError>
            )}
          </VStack>
          <VStack alignItems="flex-start" w="100%">
            <HStack justifyContent="space-between" w="100%">
              <FormLabel>Seller:</FormLabel>
              <FormInput required name="seller" w="20rem" />
            </HStack>
            {errors.seller && (
              <FormInputError fontSize="0.8rem" ml="6.5rem">
                Insira o seller do produto
              </FormInputError>
            )}
          </VStack>
          <VStack alignItems="flex-start" w="100%">
            <HStack justifyContent="space-between" w="100%">
              <FormLabel w="4rem">Prazo de entrega:</FormLabel>
              <FormInput required name="deliveryDate" w="20rem" />
            </HStack>
            {errors.deliveryDate && (
              <FormInputError fontSize="0.8rem" ml="6.5rem">
                Insira o prazo de entrega do produto
              </FormInputError>
            )}
          </VStack>
        </VStack>
      </FormControl>
    </VStack>
  );
}
