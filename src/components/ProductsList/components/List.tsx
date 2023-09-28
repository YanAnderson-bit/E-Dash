import {
  Flex,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

type ListProps = {
  data: Array<any>;
};

export default function List({ data }: ListProps) {
  console.log(data);
  if (!data)
    return (
      <Flex justifyContent="center" alignItems="center">
        <Spinner />
      </Flex>
    );
  return (
    <TableContainer>
      <Table w="90%">
        <Thead>
          <Tr>
            <Th mr="10px" bg="#4E5D66" color="white" borderRadius="8px">
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
                <Td fontSize="16px" p="40px">
                  {item.name}
                </Td>
                <Td fontSize="16px" p="40px">
                  {item.color}
                </Td>
                <Td fontSize="16px" p="40px">
                  {item.description}
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Td>
                <Td fontSize="16px" p="40px">
                  {item.status}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
