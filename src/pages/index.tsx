import { GetServerSideProps } from 'next';
import Api from '@/api';
import HomeProvider from '@/providers/HomeProvider';
import HomeScreen from '@/screens/HomeScreen';

export const getServerSideProps = async (context: GetServerSideProps) => {
  const [
    monthOrderedResult,
    monthlyAverageTicketsResults,
    alertResults,
    dailyAverageResults,
    expectatedProfitPerMonthResult,
    realProfitPerMonthResult,
    canceledOrdersPerMonthResult,
    ordersPerMonthResult,
    salesPerMonthResult,
  ] = await Promise.allSettled([
    Api.getMonthOrderedProducts(),
    Api.getMonthlyAverageTicket(),
    Api.getAlertProducts(),
    Api.getDailyAverageTicket(),
    Api.getExpectatedProfitPerMonth(),
    Api.getRealProfitPerMonth(),
    Api.getCanceledOrdersPerMonth(),
    Api.getOrdersPerMonth(),
    Api.getSalesPerMonth(),
  ]);

  return {
    props: {
      cards: {
        monthOrderedResult:
          monthOrderedResult.status === 'fulfilled'
            ? monthOrderedResult.value.data
            : null,
        alertResults:
          alertResults.status === 'fulfilled' ? alertResults.value.data : null,
        monthlyAverageTicketsResults:
          monthlyAverageTicketsResults.status === 'fulfilled'
            ? monthlyAverageTicketsResults.value.data
            : null,
        dailyAverageResults:
          dailyAverageResults.status === 'fulfilled'
            ? dailyAverageResults.value.data
            : null,
      },
      dashboards: {
        expectatedProfitPerMonthResult:
          expectatedProfitPerMonthResult.status === 'fulfilled'
            ? expectatedProfitPerMonthResult.value.data
            : null,
        realProfitPerMonthResult:
          realProfitPerMonthResult.status === 'fulfilled'
            ? realProfitPerMonthResult.value.data
            : null,
        ordersPerMonthResult:
          ordersPerMonthResult.status === 'fulfilled'
            ? ordersPerMonthResult.value.data
            : null,
        salesPerMonthResult:
          salesPerMonthResult.status === 'fulfilled'
            ? salesPerMonthResult.value.data
            : null,
        canceledOrdersPerMonthResult:
          canceledOrdersPerMonthResult.status === 'fulfilled'
            ? canceledOrdersPerMonthResult.value.data
            : null,
      },
    },
  };
};

export default function Home(props: any) {
  return (
    <HomeProvider data={props}>
      <HomeScreen />
    </HomeProvider>
  );
}
