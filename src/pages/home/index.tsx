import CardsList from '@/components/CardsList';
import Layout from '@/components/Layout';
import { Box } from '@chakra-ui/react';
import Dashboards from '@/components/Dashboards';

export default function Home() {
  return (
    <Layout>
      <Box mt="20px">
        <CardsList />
        <Dashboards />
      </Box>
    </Layout>
  );
}
