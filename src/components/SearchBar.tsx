import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

type SearchBarProps = {
  onChange: Function;
};
export default function SearchBar({ onChange }: SearchBarProps) {
  return (
    <InputGroup w="fit-content" size="lg">
      <Input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Pesquisar produtos"
      />
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
