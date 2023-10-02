import CardsList from './components/CardsList';
import Layout from '@/components/Layout';
import { Box } from '@chakra-ui/react';
import ProductsList from './components/ProductsList';
import Dashboards from './components/Dashboards';

export default function HomeScreen() {
  return (
    <Layout>
      <Box w="100%" mt="20px">
        <CardsList />
        <Dashboards />
        <ProductsList />
      </Box>
    </Layout>
  );
}
