import { Box, HStack, Heading } from '@chakra-ui/react';
import MonthlyOrdersDashboard from './MonthlyOrderDashboard/MonthlyOrders';
import ProfitDashboard from './ProfitDashboard';
import OrderedAndCanceledDasboard from './OrderedAndCanceledDashboard';

export default function Dashboards() {
  return (
    <>
      <Box mt="20px" mb="10px">
        <Heading
          fontWeight="bold"
          pl="30px"
          py="20px"
          color="#5A4CA7"
          fontSize="28px"
        >
          Dashboard de vendas
        </Heading>
      </Box>
      <HStack spacing={10}>
        <MonthlyOrdersDashboard />
        <ProfitDashboard />
        <OrderedAndCanceledDasboard />
      </HStack>
    </>
  );
}
