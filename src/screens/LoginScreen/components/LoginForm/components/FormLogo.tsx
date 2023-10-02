import { Image, Text, VStack } from '@chakra-ui/react';

export default function FormLogo() {
  return (
    <VStack spacing={10}>
      <Image alt="logo" src="/svgs/logo.svg" height={226} width={264}></Image>
      <Text fontWeight="700" fontSize="24px">
        Entrar na plataforma
      </Text>
    </VStack>
  );
}
