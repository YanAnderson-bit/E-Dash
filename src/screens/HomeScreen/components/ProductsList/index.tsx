import api from '@/api';
import { Box, HStack, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import List from './components/List';
import lodash from 'lodash';
import { useAuthenticationContext } from '@/providers/AuthenticationProvider';
type Query = {
  page: number;
  limit: number;
};
const debouncedLoadProductsList = lodash.debounce(
  (config, resolve, reject, onEnd) => {
    return api
      .getProductsList(config)
      .then(resolve)
      .catch(reject)
      .finally(onEnd);
  },
  300
);

export default function ProductsList() {
  const { user } = useAuthenticationContext();
  const [products, setProducts] = useState<any>([]);
  const [query, setQuery] = useState<Query>({ page: 1, limit: 7 });
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const hidePagination = Boolean(search);

  const onChangePage = (value: any) => {
    setQuery((currentQuery: Query) => {
      return { ...currentQuery, ...value };
    });
  };
  const onResolve = ({ data }: any) => setProducts(data);
  const onReject = (error: any) => console.log(error);

  useEffect(() => {
    setIsLoading(true);
    const params = hidePagination
      ? { page: query.page, search }
      : { ...query, search };
    const headers = { Authorization: `Bearer  ${user?.accessToken}` };
    debouncedLoadProductsList({ params, headers }, onResolve, onReject, () =>
      setIsLoading(false)
    );
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
        isLoading={isLoading}
        hidePagination={hidePagination}
        data={products}
        query={query}
        onChangePage={onChangePage}
      />
    </Box>
  );
}
