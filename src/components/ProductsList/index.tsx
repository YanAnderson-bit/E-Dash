import api from '@/api';
import { Box, HStack, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import List from './components/List';

export default function ProductsList() {
  const [products, setProducts] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    api
      .getProductsList()
      .then(({ data }) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box bg="white" p="30px" mt="70px" borderRadius="20px">
      <HStack justifyContent="space-between">
        <Heading as="h2" size="lg" fontWeight="400" color="#333333">
          Listagem de Produtos
        </Heading>
        <SearchBar onChange={setSearch} />
      </HStack>
      <List data={products} />
    </Box>
  );
}
