import { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';

type InputErrorMessageProps = {
  show: boolean;
  children: ReactNode;
};

export default function InputErrorMessage({
  show,
  children,
}: InputErrorMessageProps) {
  if (!show) return;
  return (
    <Text color="red" fontSize="16px" mt="5px" pl="24px">
      {children}
    </Text>
  );
}
