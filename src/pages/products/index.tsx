import Layout from '@/components/Layout';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import CreateProductForm from './components/CreateProductForm';
import Header from './components/CreateProductForm/components/Header';
import CreateItemForm from './components/CreateItemForm';

export default function ProductsPage() {
  return (
    <Layout>
      <Box mt="20px">
        <Header />
        <CreateProductForm />
        <CreateItemForm />
        <Flex justifyContent="flex-end" gap={5} mt="3rem">
          <Button bg="#ebebeb" w="5rem">
            <Text color="#333333">Cancelar</Text>
          </Button>
          <Button>Criar</Button>
        </Flex>
      </Box>
    </Layout>
  );
}
