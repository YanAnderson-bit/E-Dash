import { AccordionButton, Icon } from '@chakra-ui/react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

export default function MenuButton() {
  return (
    <AccordionButton
      _expanded={{
        borderBottom: '1px',
        borderBottomColor: '#00000029',
      }}
      p="25px"
    >
      <Icon fontSize="22px" aria-label="menu" as={HiOutlineMenuAlt2} />
    </AccordionButton>
  );
}
