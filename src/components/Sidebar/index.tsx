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
import { PiStack } from 'react-icons/pi';
import { BsTruck } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <Flex
      bg="white"
      justifyContent="center"
      boxShadow="lg"
      borderRadius="8px"
      mx="30px"
      mt="20px"
    >
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <MenuButton />
          </h2>
          <AccordionPanel>
            <VStack spacing={5}>
              <SidebarIconButton href="/home" icon={<PiHouseSimpleBold />} />
              <SidebarIconButton href="/products" icon={<PiStack />} />
              <SidebarIconButton href="/map" icon={<BsTruck />} />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
