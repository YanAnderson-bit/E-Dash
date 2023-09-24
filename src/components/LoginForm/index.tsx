import Image from 'next/image';
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

import InputErrorMessage from './InputErrorMessage';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const emailErrorMessage: string =
    errors.email?.type === 'required'
      ? 'O campo email é obrigatório'
      : 'Email invalido';

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(errors);
    if (errors) return;
    console.log(data);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="white"
      h="100vh"
      w="894px"
    >
      <VStack spacing={20}>
        <VStack spacing={10}>
          <Image alt="logo" src="/logo.svg" height={226} width={264}></Image>
          <Text fontWeight="700" fontSize="24px">
            Entrar na plataforma
          </Text>
        </VStack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={8}>
            <FormControl>
              <FormLabel fontSize="18px" pl="24px">
                Email
              </FormLabel>
              <Input
                py="19px"
                px="24px"
                w="400px"
                h="60px"
                borderRadius="5px"
                bg="#f3f5f6"
                fontSize="20px"
                type="text"
                placeholder="Insira o email"
                {...register('email', {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                })}
              />
              <InputErrorMessage show={Boolean(errors.email)}>
                {emailErrorMessage}
              </InputErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel fontSize="18px" pl="24px">
                Senha
              </FormLabel>
              <Input
                py="19px"
                px="24px"
                w="400px"
                h="60px"
                borderRadius="5px"
                bg="#f3f5f6"
                fontSize="20px"
                type="password"
                placeholder="Insira a senha"
                {...register('password', {
                  required: true,
                })}
              />
              <InputErrorMessage show={Boolean(errors.password)}>
                O campo senha é obrigatorio
              </InputErrorMessage>
            </FormControl>
            <Button
              borderRadius="8px"
              type="submit"
              marginTop="20px"
              w="120px"
              h="40px"
              color="white"
              bg="#5a4ca7"
            >
              Entrar
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
}
