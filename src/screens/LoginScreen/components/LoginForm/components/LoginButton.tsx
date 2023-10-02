import { Button, Spinner, Text, VStack } from '@chakra-ui/react';

type LoginButtonProps = {
  isLoading: boolean;
  isLoginInvalid: boolean;
};
export default function LoginButton({
  isLoading,
  isLoginInvalid,
}: LoginButtonProps) {
  return (
    <VStack spacing={1}>
      <Button
        borderRadius="8px"
        type="submit"
        marginTop="20px"
        w="120px"
        h="40px"
        color="white"
        bg="#5a4ca7"
      >
        {isLoading ? <Spinner /> : 'Entrar'}
      </Button>
      {isLoginInvalid && (
        <Text color="red" fontSize="16px" mt="5px">
          Email ou senha inválidos
        </Text>
      )}
    </VStack>
  );
}
