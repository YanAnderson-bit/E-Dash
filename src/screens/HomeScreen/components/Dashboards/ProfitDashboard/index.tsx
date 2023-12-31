import { Box, Flex, Heading } from '@chakra-ui/react';
import options from './config/options';
import labels from './config/labels';

import chart from 'chart.js/auto';
import {
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  BarController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Filter from '../Filter';
import { useHomeContext } from '@/providers/HomeProvider';

chart.register(
  PointElement,
  LineElement,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ProfitDashboard() {
  const { dashboards } = useHomeContext();

  const data: any = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'Real',
        data: dashboards.realProfitPerMonthResult?.map(
          (item: any) => item?.value
        ),
        backgroundColor: '#9FD8D5',
        borderRadius: 3,
        order: 4,
      },
      {
        type: 'bar' as const,
        label: 'Expectativa',
        data: dashboards.expectatedProfitPerMonthResult?.map(
          (item: any) => item?.value
        ),
        backgroundColor: '#F78899',
        borderRadius: 3,
        order: 3,
      },
      {
        type: 'line' as const,
        label: 'Real do ano anterior',
        data: dashboards.realProfitPerMonthResult?.map(
          (item: any) => item?.value
        ),
        borderColor: '#393C56',
        backgroundColor: '#393C56',
        pointBackgroundColor: 'white',
        pointBorderWidth: 2,
        order: 2,
      },
      {
        type: 'line' as const,
        label: 'Expectativa do mês anterior',
        data: dashboards.expectatedProfitPerMonthResult?.map(
          (item: any) => item?.value
        ),
        borderColor: '#E0347D',
        backgroundColor: '#E0347D',
        pointBackgroundColor: 'white',
        pointBorderWidth: 2,
        order: 1,
      },
    ],
  };

  return (
    <Box bg="white" w="600px" h="400px" mt="20px" borderRadius="12px" p="10px">
      <Flex justifyContent="space-between" p="20px">
        <Heading size="md" as="h4" color="#333333" fontWeight="bold">
          Expectativa de lucro x lucro real
        </Heading>
        <Filter />
      </Flex>
      <Bar data={data} options={options} />
    </Box>
  );
}
