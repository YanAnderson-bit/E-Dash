import { Box, Input, InputProps } from '@chakra-ui/react';

export default function FormInput(props: InputProps) {
  return (
    <Input
      border="none"
      borderRadius="9px"
      bg="#F3F5F6"
      type="string"
      {...props}
    />
  );
}
