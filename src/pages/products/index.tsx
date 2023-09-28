import Layout from '@/components/Layout';
import { Box } from '@chakra-ui/react';
import CreateProductForm from './components/CreateProductForm';
import Header from './components/CreateProductForm/components/Header';

export default function ProductsPage() {
  return (
    <Layout>
      <Box w="1736px" mt="20px">
        <Header />
        <CreateProductForm />
      </Box>
    </Layout>
  );
}
