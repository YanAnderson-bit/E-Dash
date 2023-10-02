import Layout from '@/components/Layout';
import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react';
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
  items: {
    code: string | undefined;
    color: string | undefined;
    size: {
      width: string | undefined;
      height: string | undefined;
      length: string | undefined;
    };
  }[];
};

export default function ProductsScreen() {
  const toast = useToast();
  const formMethods = useForm<Form>({
    defaultValues: {
      code: '',
      productId: '',
      seller: '',
      deliveryDate: '',
      specificationsSubtitle: '',
      specificationsInfo: '',
      specificationsCare: '',
      categories: [],
      tags: [],
      id: '',
      items: [],
    },
  });
  const onSubmit = (product: any): void => {
    const createProductPromise = Api.createProduct(product)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    toast.promise(createProductPromise, {
      success: {
        title: 'Produto criado com sucesso',
        duration: 9000,
        isClosable: true,
      },
      error: {
        title: 'Ocorreu uma falha ao criar o produto',
        duration: 9000,
        isClosable: true,
      },
      loading: { title: 'Criando produto...' },
    });
  };

  return (
    <Layout>
      <Box mt="20px" pb="2rem">
        <Header />
        <FormProvider {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <CreateProductForm />
            <CreateItemForm />
            <Flex justifyContent="flex-end" gap={5} mt="3rem">
              <Button h="2.2rem" borderRadius="8px" bg="#ebebeb" w="7rem">
                <Text fontWeight="500" color="#333333">
                  Cancelar
                </Text>
              </Button>
              <Button
                borderRadius="8px"
                w="7rem"
                h="2.2rem"
                fontWeight="500"
                bg="#C0D7E5"
                type="submit"
              >
                Criar
              </Button>
            </Flex>
          </form>
        </FormProvider>
      </Box>
    </Layout>
  );
}
