import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type FormInputErrorProps = {
  children: ReactNode;
} & TextProps;

export default function FormInputError({
  children,
  ...props
}: FormInputErrorProps) {
  return (
    <Text color="red" fontSize="0.9rem" {...props}>
      {children}
    </Text>
  );
}
