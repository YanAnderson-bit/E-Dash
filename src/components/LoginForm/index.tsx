import Image from 'next/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import InputErrorMessage from './components/InputErrorMessage';
import Api from '@/api';
import validateLogin from './utils/validateLogin';
import LoginButton from './components/LoginButton';
import FormLogo from './components/FormLogo';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoginInvalid, setIsLoginInvalid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const emailErrorMessage: string =
    errors.email?.type === 'required'
      ? 'O campo email é obrigatório'
      : 'Email invalido';

  const onSubmit: SubmitHandler<Inputs> = (login) => {
    setIsLoading(true);
    const isLoginValid: boolean = validateLogin(login);
    if (!isLoginValid) {
      setIsLoading(false);
      setIsLoginInvalid(true);
      return;
    }
    Api.get('https://628bf017667aea3a3e387e51.mockapi.io/login')
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoginInvalid(false);
        setIsLoading(false);
      });
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
        <FormLogo />
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
                borderStyle="none"
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
              <InputGroup>
                <Input
                  py="19px"
                  px="24px"
                  w="400px"
                  h="60px"
                  borderStyle="none"
                  borderRadius="5px"
                  bg="#f3f5f6"
                  fontSize="20px"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Insira a senha"
                  {...register('password', {
                    required: true,
                  })}
                />
                <InputRightElement h={'full'}>
                  <Button
                    onClick={() => setShowPassword(!showPassword)}
                    variant={'ghost'}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputErrorMessage show={Boolean(errors.password)}>
                O campo senha é obrigatorio
              </InputErrorMessage>
            </FormControl>
            <LoginButton
              isLoading={isLoading}
              isLoginInvalid={isLoginInvalid}
            />
          </VStack>
        </form>
      </VStack>
    </Box>
  );
}
