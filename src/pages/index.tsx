import { NextPageContext } from 'next';
import Api from '@/api';
import HomeProvider from '@/providers/HomeProvider';
import HomeScreen from '@/screens/HomeScreen';
import nookies from 'nookies';

export const getServerSideProps = async (
  context: Pick<NextPageContext, 'req'>
) => {
  const session: any = JSON.parse(nookies.get(context).session);
  const config: any = {
    headers: { Authorization: `Bearer ${session.accessToken}` },
  };
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
    Api.getMonthOrderedProducts(config),
    Api.getMonthlyAverageTicket(config),
    Api.getAlertProducts(config),
    Api.getDailyAverageTicket(config),
    Api.getExpectatedProfitPerMonth(config),
    Api.getRealProfitPerMonth(config),
    Api.getCanceledOrdersPerMonth(config),
    Api.getOrdersPerMonth(config),
    Api.getSalesPerMonth(config),
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
