import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type Inputs = {
  email: string;
};

export default function EmailInput() {
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const emailErrorMessage: string =
    errors.email?.type === 'required'
      ? 'O campo email é obrigatório'
      : 'Email invalido';

  return (
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input
        p="10px"
        w="300px"
        borderRadius="5px"
        bg="#f3f5f6"
        type="text"
        placeholder="Insira o email"
        {...register('email', {
          required: true,
          pattern:
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
        })}
      />
      {errors.email && <Text>{emailErrorMessage}</Text>}
    </FormControl>
  );
}
