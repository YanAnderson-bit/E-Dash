import FormInput from '@/components/FormInput';
import FormInputError from '@/components/FormInputError';
import FormTextarea from '@/components/FormTextarea';
import { FormControl, FormLabel, HStack, Text, VStack } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export default function Especifications() {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <VStack w="100%" spacing={10} alignItems="flex-start">
      <Text color="#333333" fontSize="18px">
        Especificações
      </Text>
      <FormControl>
        <VStack color="primmary.input" spacing={5} alignItems="flex-start">
          <VStack alignItems="flex-start" w="100%">
            <HStack gap={10} w="100%">
              <FormLabel>Subtítulo:</FormLabel>
              <FormInput required name="specificationsSubtitle" />
            </HStack>
            {errors.specificationsSubtitle && (
              <FormInputError fontSize="0.8rem" ml="8rem" show>
                Insira o subtitulo do produto
              </FormInputError>
            )}
          </VStack>
          <VStack alignItems="flex-start" w="100%">
            <HStack gap={4} w="100%">
              <FormLabel>Informações:</FormLabel>
              <FormTextarea name="specificationsInfo" required />
            </HStack>
            {errors.specificationsInfo && (
              <FormInputError fontSize="0.8rem" ml="8rem" show>
                Insira as especificações do produto
              </FormInputError>
            )}
          </VStack>
          <VStack alignItems="flex-start" w="100%">
            <HStack gap={9} w="100%">
              <FormLabel w="80px" h="42px">
                Limpeza e cudados:
              </FormLabel>
              <FormTextarea required name="specificationsCares" />
            </HStack>
            {errors.specificationsCares && (
              <FormInputError fontSize="0.8rem" ml="8rem" show>
                Insira limpezas e cuidados do produto
              </FormInputError>
            )}
          </VStack>
        </VStack>
      </FormControl>
    </VStack>
  );
}
