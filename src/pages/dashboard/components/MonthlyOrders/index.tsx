import Api from '@/api';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import options from './config/options';
import labels from './config/labels';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Filter from './Filter';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function MonthlyOrders() {
  const [sales, setSales] = useState<any>([]);
  const data: any = {
    labels,
    datasets: [
      {
        data: sales?.map((item: any) => item?.value),
        backgroundColor: '#393C56',
        borderRadius: 3,
        categoryPercentage: 0.5,
      },
    ],
  };

  useEffect(() => {
    Api.getSalesPerMonth()
      .then(({ data }) => setSales(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box bg="white" w="600px" h="400px" mt="20px" borderRadius="12px" p="10px">
      <Flex justifyContent="space-between" p="20px">
        <Heading size="md" as="h4" color="#333333" fontWeight="bold">
          Pedidos por mês
        </Heading>
        <Filter />
      </Flex>
      <Bar data={data} options={options} />
    </Box>
  );
}