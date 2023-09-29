import { Box, Input, InputProps } from '@chakra-ui/react';
import { ValidationRule, useFormContext } from 'react-hook-form';

type FormInputProps = {
  name: string;
  isRequired?: boolean;
  pattern?: ValidationRule<RegExp> | undefined;
} & InputProps;

export default function FormInput({
  isRequired = false,
  pattern = undefined,
  ...props
}: FormInputProps) {
  const { register } = useFormContext();
  console.log(props.name);
  return (
    <Input
      border="none"
      borderRadius="9px"
      bg="#F3F5F6"
      type="string"
      {...props}
      {...register(props.name, { required: isRequired, pattern })}
    />
  );
}
