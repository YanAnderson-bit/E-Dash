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

import styles from './styles';

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
    <Box sx={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={8}>
          <FormControl>
            <FormLabel sx={styles.label}>Email</FormLabel>
            <Input
              sx={styles.input}
              type="text"
              placeholder="Insira o email"
              {...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email && (
              <Text sx={styles.inputError}>{emailErrorMessage}</Text>
            )}
          </FormControl>
          <FormControl>
            <FormLabel sx={styles.label}>Senha</FormLabel>
            <Input
              style={styles.input}
              type="password"
              placeholder="Insira a senha"
              {...register('password', {
                required: true,
              })}
            />
            {errors.password && (
              <Text sx={styles.inputError}>O campo senha é obrigatorio</Text>
            )}
          </FormControl>
          <Button type="submit" sx={styles.loginButton}>
            Entrar
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
