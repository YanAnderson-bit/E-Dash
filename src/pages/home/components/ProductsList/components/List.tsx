import Loading from '@/components/Loading';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

type ListProps = {
  data: any[];
  query: any;
  onChangePage: Function;
};

export default function List({ data, query, onChangePage }: ListProps) {
  if (!data) return <Loading />;
  const LIMIT: number = 7;
  const PRODUCTS_QUANTITY = 58;
  const pages: number = Math.ceil(PRODUCTS_QUANTITY / LIMIT);
  console.log(pages);
  return (
    <TableContainer overflowX="hidden">
      <Table size="lg">
        <Thead>
          <Tr>
            <Th bg="#4E5D66" color="white" borderRadius="8px">
              PRODUTO
            </Th>
            <Th bg="#4E5D66" color="white" borderRadius="8px">
              CORES
            </Th>
            <Th bg="#4E5D66" color="white" borderRadius="8px">
              ESPECIFICAÇÕES
            </Th>
            <Th bg="#4E5D66" color="white" borderRadius="8px">
              STATUS
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => {
            return (
              <Tr key={item.id}>
                <Td fontSize="16px">{item.name}</Td>
                <Td fontSize="16px">{item.color}</Td>
                <Td fontSize="16px">{item.description}</Td>
                <Td fontSize="16px">{item.status}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Flex mt="3rem" justifyContent="flex-end">
        <HStack justifyContent="space-between" spacing={5}>
          <Text color="primmary.input">
            {query.page} de {pages}
          </Text>
          <HStack>
            <IconButton
              hidden={query.page === 1}
              aria-label="leftPage"
              onClick={() => onChangePage({ page: query.page - 1 })}
              icon={<AiOutlineLeft />}
            />
            <IconButton
              aria-label="rightPage"
              onClick={() => onChangePage({ page: query.page + 1 })}
              icon={<AiOutlineRight />}
              hidden={query.page === pages}
            />
          </HStack>
        </HStack>
      </Flex>
    </TableContainer>
  );
}
