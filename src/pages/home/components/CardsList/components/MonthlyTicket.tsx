import { useHomeContext } from '@/providers/HomeProvider';
import formatPrice from '@/utils/formatPrice';

import { Box, Card, CardBody, HStack, Heading, Text } from '@chakra-ui/react';

export default function MonthlyTicket() {
  const { cards } = useHomeContext();
  const hasGrowthDecreased: boolean =
    cards.monthlyAverageTicketsResults?.growth < 0;
  const informationTextColor: string = hasGrowthDecreased
    ? '#D6628E'
    : '#109E8E';

  return (
    <Card w="240px" px="15px">
      <Heading pt="20px" color="#4E5D66" size="sm">
        Ticket médio mensal
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
          <Text fontSize="12px" color={informationTextColor} fontWeight="bold">
            {cards.monthlyAverageTicketsResults?.growth}%
          </Text>
        </Box>

        <Text fontSize="14px" color={informationTextColor}>
          Em relação a ontem
        </Text>
        <HStack color="#4E5D66" my="10px">
          <Text fontSize="16px">R$</Text>
          <Text fontWeight="bold" fontSize="20px">
            {formatPrice(cards.monthlyAverageTicketsResults?.value).replace(
              'R$',
              ''
            )}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
}
