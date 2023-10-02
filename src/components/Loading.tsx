import { Flex, FlexProps, Spinner } from '@chakra-ui/react';

export default function Loading(props: FlexProps) {
  return (
    <Flex justifyContent="center" alignItems="center" {...props}>
      <Spinner />
    </Flex>
  );
}
