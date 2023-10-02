import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type SearchBarProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};
export default function SearchBar({ onChange }: SearchBarProps) {
  return (
    <InputGroup w="fit-content" size="lg">
      <Input onChange={onChange} type="text" placeholder="Pesquisar produtos" />
      <InputRightElement>
        <IconButton
          icon={<AiOutlineSearch />}
          bg="none"
          fontSize="22px"
          aria-label="search"
        />
      </InputRightElement>
    </InputGroup>
  );
}
