import { Textarea, TextareaProps } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

type FormTextareaProps = {
  name: string;
  required?: boolean;
} & TextareaProps;

export default function FormTextarea({
  name,
  required = false,
  ...props
}: FormTextareaProps) {
  const { register } = useFormContext();
  return (
    <Textarea
      {...register(name, { required })}
      bg="primmary.bgInput"
      border="none"
      borderRadius="9px"
      {...props}
    />
  );
}
