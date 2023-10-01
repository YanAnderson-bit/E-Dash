import { Flex, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Spinner />
    </Flex>
  );
}
