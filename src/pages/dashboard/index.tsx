import CardsList from '@/components/CardsList';
import Layout from '@/components/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';
import MonthlyOrders from './components/MonthlyOrders';

export default function Dashboard() {
  return (
    <Layout>
      <Box my="20px" display="block">
        <Heading
          pl="30px"
          py="20px"
          color="#4E5D66"
          fontSize="28px"
          fontWeight="700"
        >
          Início
        </Heading>
        <CardsList />
        <Box my="20px">
          <Heading
            fontWeight="bold"
            pl="30px"
            py="20px"
            color="#5A4CA7"
            fontSize="28px"
          >
            Dashboard de vendas
          </Heading>
          <MonthlyOrders />
        </Box>
      </Box>
    </Layout>
  );
}
