import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import EmailInput from './Inputs/EmailInput';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const emailErrorMessage: string =
    errors.email?.type === 'required'
      ? 'O campo email é obrigatório'
      : 'Email invalido';

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Box
      bgColor="white"
      h="100vh"
      w="750px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5}>
          <FormControl>
            <FormLabel pl="10px">Email</FormLabel>
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
            {errors.email && (
              <Text color="red" fontSize="14px" pl="10px">
                {emailErrorMessage}
              </Text>
            )}
          </FormControl>
          <FormControl>
            <FormLabel pl="10px">Senha</FormLabel>
            <Input
              p="10px"
              w="300px"
              borderRadius="5px"
              bg="#f3f5f6"
              type="password"
              placeholder="Insira a senha"
              {...register('password', {
                required: true,
              })}
            />
            {errors.password && (
              <Text color="red" fontSize="14px" pl="10px">
                O campo senha é obrigatorio
              </Text>
            )}
          </FormControl>
          <Button
            mt="20px"
            w="80px"
            h="28px"
            type="submit"
            color="white"
            bgColor="#5a4ca7"
          >
            Entrar
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
