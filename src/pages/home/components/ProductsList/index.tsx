import api from '@/api';
import { Box, HStack, Heading } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import List from './components/List';

type Query = {
  page: number;
  limit: number;
};

export default function ProductsList() {
  const [products, setProducts] = useState<any>([]);
  const [query, setQuery] = useState<Query>({ page: 1, limit: 7 });
  const [search, setSearch] = useState<string>('');
  const hidePagination = Boolean(search);

  const onChangePage = (value: any) => {
    setQuery((currentQuery: Query) => {
      return { ...currentQuery, ...value };
    });
  };

  useEffect(() => {
    const params = hidePagination
      ? { page: query.page, search }
      : { ...query, search };
    api
      .getProductsList(params)
      .then(({ data }) => setProducts(data))
      .catch((error) => console.log(error));
  }, [query, search]);

  return (
    <Box bg="white" p="2rem" mt="3rem" borderRadius="20px">
      <HStack justifyContent="space-between" mb="2.5rem">
        <Heading as="h2" size="lg" fontWeight="400" color="#333333">
          Listagem de Produtos
        </Heading>
        <SearchBar
          onChange={(e: any) => {
            setSearch(e.target.value);
            onChangePage({ page: 1 });
          }}
        />
      </HStack>
      <List
        hidePagination={hidePagination}
        data={products}
        query={query}
        onChangePage={onChangePage}
      />
    </Box>
  );
}
