import Layout from '@/components/Layout';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import CreateProductForm from './components/CreateProductForm';
import Header from './components/Header';
import CreateItemForm from './components/CreateItemForm';
import { FormProvider, useForm } from 'react-hook-form';
import Api from '@/api';

type Form = {
  code: string;
  productId: string;
  seller: string;
  deliveryDate: string;
  specificationsSubtitle: string;
  specificationsInfo: string;
  specificationsCare: string;
  categories: string[];
  tags: string[];
  id: string;
  items: Array<Object>;
};

export default function ProductsPage() {
  const formMethods = useForm<Form>();
  const onSubmit = (product: any): Promise<void> =>
    Api.createProduct(product)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

  return (
    <Layout>
      <Box mt="20px" pb="2rem">
        <Header />
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <CreateProductForm />
            <CreateItemForm />
            <Flex justifyContent="flex-end" gap={5} mt="3rem">
              <Button bg="#ebebeb" w="5rem">
                <Text color="#333333">Cancelar</Text>
              </Button>
              <Button type="submit">Criar</Button>
            </Flex>
          </form>
        </FormProvider>
      </Box>
    </Layout>
  );
}
