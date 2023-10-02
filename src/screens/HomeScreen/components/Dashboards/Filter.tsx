import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Menu, MenuButton, Text } from '@chakra-ui/react';

export default function Filter() {
  return (
    <Menu>
      <MenuButton
        color="#333333"
        bg="#F3F5F6"
        opacity={0.4}
        as={Button}
        w="179px"
        h="35px"
        rightIcon={<ChevronDownIcon />}
      >
        <Box mr="80px">
          <Text fontSize="16px">Ano</Text>
        </Box>
      </MenuButton>
    </Menu>
  );
}
