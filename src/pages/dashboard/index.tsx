import CardsList from '@/components/CardsList';
import Layout from '@/components/Layout';
import { Box, Flex, Heading, VStack } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <Layout>
      <Box p="50px" display="block">
        <Heading pl="30px" py="20px" color="#4E5D66" as="h2" size="lg">
          Início
        </Heading>
        <CardsList />
      </Box>
    </Layout>
  );
}
