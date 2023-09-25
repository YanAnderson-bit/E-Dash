import { Avatar, Box, Flex, HStack, Image, Text } from '@chakra-ui/react';

export default function Header() {
  const session: any = JSON.parse(localStorage.getItem('session') || '');

  return (
    <Flex
      as="nav"
      bg="white"
      w="100%"
      h="84px"
      boxShadow="md"
      alignItems="center"
      justifyContent="space-between"
      paddingX="50px"
      paddingY="35px"
    >
      <Image alt="logo" src="/logo.svg" boxSize="69px" />
      <HStack spacing={5}>
        <Text>{session.name}</Text>
        <Avatar
          fontWeight="bold"
          color="#52606c"
          bg="#a49ccc"
          name={session.name}
        />
      </HStack>
    </Flex>
  );
}
