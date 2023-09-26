import { Box, Card, CardBody, HStack, Heading, Text } from '@chakra-ui/react';

type BoardProps = {
  title: string;
  percentage: number;
  month: string;
  value: number;
};
export default function Board({ title, month, value, percentage }: BoardProps) {
  return (
    <Card w="232px" px="23px">
      <Heading pt="20px" color="#4E5D66" size="sm">
        Client Report
      </Heading>
      <CardBody p="0px" mt="20px">
        <Box
          px="12px"
          py="5px"
          w="fit-content"
          borderRadius="12px"
          boxShadow="lg"
          mb="10px"
          bg="white"
        >
          <Text fontSize="12px" color="#109E8E" fontWeight="bold">
            + 15%
          </Text>
        </Box>

        <Text fontSize="14px" color="#109E8E">
          Em relação a ontem
        </Text>
        <HStack color="#4E5D66" my="10px">
          <Text fontSize="16px">R$</Text>
          <Text fontWeight="bold" fontSize="20px">
            9.289.00
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
}
