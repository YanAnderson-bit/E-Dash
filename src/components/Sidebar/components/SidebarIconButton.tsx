import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactElement } from 'react';

type SidebarIconButtonProps = {
  icon: ReactElement;
  href: string;
};

export default function SidebarIconButton({
  icon,
  href,
}: SidebarIconButtonProps) {
  return (
    <Link href={href}>
      <IconButton
        bg="none"
        fontSize="22px"
        aria-label="Form"
        icon={icon}
        _hover={{ bg: '#5A4CA7', color: 'white' }}
      />
    </Link>
  );
}
