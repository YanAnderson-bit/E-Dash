import Api from '@/api';

import { Box, Card, CardBody, HStack, Heading, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

export default function ProductsRemaining() {
  const [maintainceProduct, setMaintainceProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const daysRemaining = useCallback(() => {
    const date1 = new Date(maintainceProduct?.since);
    var date2 = new Date();
    var differenceInTime = date2.getTime() - date1.getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.round(differenceInDays);
  }, [maintainceProduct]);

  useEffect(() => {
    setIsLoading(true);
    Api.getAlertProducts()
      .then(({ data }) => setMaintainceProduct(data[1]))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card w="245px" px="15px">
      <Heading pt="20px" color="#4E5D66" size="sm">
        Acabando o estoque
      </Heading>
      <CardBody p="0px" mt="10px">
        <Box
          px="12px"
          py="5px"
          w="fit-content"
          borderRadius="12px"
          boxShadow="lg"
          mb="10px"
          bg="white"
        >
          <Text fontSize="12px" color="#D6628E" fontWeight="bold">
            há {daysRemaining()} dias
          </Text>
        </Box>
        <Text fontSize="14px" color="#D6628E">
          Repor o quanto antes
        </Text>
        <HStack alignItems="center" color="#4E5D66" my="10px">
          <Text fontWeight="bold" fontSize="20px">
            {maintainceProduct?.value}
          </Text>
          <Text fontSize="16px">Produtos</Text>
        </HStack>
      </CardBody>
    </Card>
  );
}
