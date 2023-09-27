import { IconButton } from '@chakra-ui/react';
import { ReactElement } from 'react';

type SidebarIconButtonProps = {
  icon: ReactElement;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SidebarIconButton({
  icon,
  onClick,
}: SidebarIconButtonProps) {
  return (
    <IconButton
      bg="none"
      fontSize="22px"
      aria-label="Form"
      icon={icon}
      _hover={{ bg: '#5A4CA7', color: 'white' }}
      onClick={onClick}
    />
  );
}
