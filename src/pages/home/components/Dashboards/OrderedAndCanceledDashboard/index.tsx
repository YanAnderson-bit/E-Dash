import { Box, Flex, Heading } from '@chakra-ui/react';
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
import { useHomeContext } from '@/providers/HomeProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function OrderedAndCanceledDasboard() {
  const { dashboards } = useHomeContext();

  const data: any = {
    labels,
    datasets: [
      {
        label: 'Realizados',
        data: dashboards.ordersPerMonthResult?.map((item: any) => item?.value),
        backgroundColor: '#109E8E',
        borderRadius: 3,
        order: 1,
      },
      {
        label: 'Cancelados',
        data: dashboards.canceledOrdersPerMonthResult?.map(
          (item: any) => item?.value
        ),
        backgroundColor: '#F18F7F',
        borderRadius: 3,
        order: 2,
      },
    ],
  };

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
