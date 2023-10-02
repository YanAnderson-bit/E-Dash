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
import Filter from '../Filter';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function OrderedAndCanceledDasboard() {
  const [orders, setOrders] = useState<any>([]);
  const [canceledOrders, setCanceledOrders] = useState<any>([]);

  const data: any = {
    labels,
    datasets: [
      {
        label: 'Realizados',
        data: orders?.map((item: any) => item?.value),
        backgroundColor: '#109E8E',
        borderRadius: 3,
        order: 1,
      },
      {
        label: 'Cancelados',
        data: canceledOrders?.map((item: any) => item?.value),
        backgroundColor: '#F18F7F',
        borderRadius: 3,
        order: 2,
      },
    ],
  };

  useEffect(() => {
    Api.getOrdersPerMonth()
      .then(({ data }) => setOrders(data))
      .catch((error) => console.log(error));
    Api.getCanceledOrdersPerMonth()
      .then(({ data }) => setCanceledOrders(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box bg="white" w="600px" h="400px" mt="20px" borderRadius="12px" p="10px">
      <Flex justifyContent="space-between" p="20px">
        <Heading size="md" as="h4" color="#333333" fontWeight="bold">
          Pedidos realizados x cancelados
        </Heading>
        <Filter />
      </Flex>
      <Bar data={data} options={options} />
    </Box>
  );
}
