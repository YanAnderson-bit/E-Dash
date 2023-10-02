import { useHomeContext } from '@/providers/HomeProvider';

import { Box, Card, CardBody, HStack, Heading, Text } from '@chakra-ui/react';
import { useCallback } from 'react';

export default function MaintainceTicket() {
  const { cards } = useHomeContext();

  const daysRemaining = useCallback(() => {
    const date1 = new Date(cards.alertResults[0]?.since);
    const date2 = new Date();
    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.round(differenceInDays);
  }, []);

  return (
    <Card w="245px" px="15px">
      <Heading pt="20px" color="#4E5D66" size="sm">
        Produtos em manutenção
      </Heading>
      <CardBody p="0px" mt="10px">
        <Box
          px="12px"
          py="5px"
          w="fit-content"
          borderRadius="12px"
          boxShadow="lg"
          mb="10px"
          bg="white"
        >
          <Text fontSize="12px" color="#D6628E" fontWeight="bold">
            há {daysRemaining()} dias
          </Text>
        </Box>

        <HStack color="#4E5D66" mt="40px" mb="10px">
          <Text fontWeight="bold" fontSize="20px">
            {cards.alertResults[0]?.value}
          </Text>
          <Text fontSize="16px">Produtos</Text>
        </HStack>
      </CardBody>
    </Card>
  );
}
