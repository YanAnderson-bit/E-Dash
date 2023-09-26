import { useAuthenticationContext } from '@/providers/AuthenticationProvider';
import { Avatar, Flex, HStack, Image, Text } from '@chakra-ui/react';

export default function Header() {
  const { user } = useAuthenticationContext();

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
        <Text>{user?.name}</Text>
        <Avatar
          fontWeight="bold"
          color="#52606c"
          bg="#a49ccc"
          name={user?.name}
        />
      </HStack>
    </Flex>
  );
}
