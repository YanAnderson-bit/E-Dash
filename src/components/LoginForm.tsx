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
        <VStack spacing={8}>
          <FormControl>
            <FormLabel fontSize="14px" pl="15px">
              Email
            </FormLabel>
            <Input
              p="15px"
              w="300px"
              borderRadius="5px"
              bg="#f3f5f6"
              type="text"
              fontSize="14px"
              placeholder="Insira o email"
              {...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email && (
              <Text color="red" fontSize="14px" mt="5px" pl="15px">
                {emailErrorMessage}
              </Text>
            )}
          </FormControl>
          <FormControl>
            <FormLabel fontSize="14px" pl="15px">
              Senha
            </FormLabel>
            <Input
              p="15px"
              w="300px"
              borderRadius="5px"
              bg="#f3f5f6"
              fontSize="14px"
              type="password"
              placeholder="Insira a senha"
              {...register('password', {
                required: true,
              })}
            />
            {errors.password && (
              <Text color="red" fontSize="14px" mt="5px" pl="15px">
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
