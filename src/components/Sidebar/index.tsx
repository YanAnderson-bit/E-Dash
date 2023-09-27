import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Flex,
  VStack,
} from '@chakra-ui/react';

import MenuButton from './components/MenuButton';
import SidebarIconButton from './components/SidebarIconButton';
import { PiHouseSimpleBold } from 'react-icons/pi';
import { useRouter } from 'next/router';
import { PiStack } from 'react-icons/pi';
import { BsTruck } from 'react-icons/bs';
export default function Sidebar() {
  const router = useRouter();

  const onClickHome = () => router.push('/dashboard');
  const onClickStack = () => router.push('/form');
  const onClickTruck = () => router.push('/map');

  return (
    <Flex
      bg="white"
      justifyContent="center"
      boxShadow="lg"
      borderRadius="8px"
      mx="20px"
      mt="20px"
    >
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <MenuButton />
          </h2>
          <AccordionPanel>
            <VStack spacing={5}>
              <SidebarIconButton
                onClick={onClickHome}
                icon={<PiHouseSimpleBold />}
              />
              <SidebarIconButton onClick={onClickStack} icon={<PiStack />} />
              <SidebarIconButton onClick={onClickTruck} icon={<BsTruck />} />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
