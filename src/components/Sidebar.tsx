import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Image,
  VStack,
} from '@chakra-ui/react';

export default function Sidebar() {
  return (
    <Flex
      bg="white"
      justifyContent="center"
      w="90px"
      boxShadow="lg"
      borderRadius="8px"
    >
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Image alt="menu" src="/svgs/menu.svg" />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <VStack>
              <Button bgColor="white">
                <Image alt="menu" src="/svgs/home.svg" />
              </Button>
              <Button bgColor="white">
                <Image alt="menu" src="/svgs/cat.svg" />
              </Button>
              <Button bgColor="white">
                <Image alt="menu" src="/svgs/truck.svg" />
              </Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
