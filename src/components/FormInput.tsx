import { Box, Input, InputProps } from '@chakra-ui/react';

export default function FormInput(props: InputProps) {
  return <Input border="none" bg="#F3F5F6" type="string" {...props} />;
}
