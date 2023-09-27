import { Box, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';

import DailyTicket from './components/DailyTicket';
import MonthlyTicket from './components/MonthlyTicket';
import MaintainceTicket from './components/MaintainanceProducts';
import ProductsRemaining from './components/ProductsRemaining';
import RequestedProducts from './components/RequestedProducts';
import SoldProducts from './components/SoldProducts';

export default function CardsList() {
  return (
    <SimpleGrid columns={6} spacing={6}>
      <DailyTicket />
      <MonthlyTicket />
      <MaintainceTicket />
      <ProductsRemaining />
      <RequestedProducts />
      <SoldProducts />
    </SimpleGrid>
  );
}
