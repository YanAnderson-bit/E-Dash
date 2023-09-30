import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';

import DailyTicket from './components/DailyTicket';
import MonthlyTicket from './components/MonthlyTicket';
import MaintainceTicket from './components/MaintainanceProducts';
import ProductsRemaining from './components/ProductsRemaining';
import RequestedProducts from './components/RequestedProducts';
import SoldProducts from './components/SoldProducts';

export default function CardsList() {
  return (
    <>
      <Heading
        pl="30px"
        py="20px"
        color="#4E5D66"
        fontSize="28px"
        fontWeight="700"
      >
        Início
      </Heading>
      <SimpleGrid w="85%" columns={6} spacing={0}>
        <DailyTicket />
        <MonthlyTicket />
        <MaintainceTicket />
        <ProductsRemaining />
        <RequestedProducts />
        <SoldProducts />
      </SimpleGrid>
    </>
  );
}
