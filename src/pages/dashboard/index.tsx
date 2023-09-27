import CardsList from '@/components/CardsList';
import Layout from '@/components/Layout';
import { Box, Heading } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <Layout>
      <Box mt="20px" display="block">
        <Heading
          fontWeight="bold"
          pl="30px"
          py="20px"
          color="#4E5D66"
          as="h2"
          size="lg"
        >
          Início
        </Heading>
        <CardsList />
      </Box>
    </Layout>
  );
}
