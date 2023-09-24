import { Avatar, Box, Flex, HStack, Image, Text } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bg="white"
      w="100%"
      h="60px"
      boxShadow="md"
      alignItems="center"
      justifyContent="space-between"
      paddingX="50px"
      paddingY="35px"
    >
      <Image alt="logo" src="/icon.jpg" boxSize="50px" />
      <HStack spacing={5}>
        <Text>Yan Anderson</Text>
        <Avatar
          fontWeight="bold"
          color="#52606c"
          bg="#a49ccc"
          name="Yan Anderson"
        />
      </HStack>
    </Flex>
  );
}
