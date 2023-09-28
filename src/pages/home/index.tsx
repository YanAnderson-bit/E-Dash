import CardsList from '@/components/CardsList';
import Layout from '@/components/Layout';
import { Box } from '@chakra-ui/react';
import Dashboards from '@/components/Dashboards';
import ProductsList from '@/components/ProductsList';

export default function Home() {
  return (
    <Layout>
      <Box mt="20px">
        <CardsList />
        <Dashboards />
        <ProductsList />
      </Box>
    </Layout>
  );
}
