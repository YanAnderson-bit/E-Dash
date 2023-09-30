import { Box, Input, InputProps } from '@chakra-ui/react';
import { ValidationRule, useFormContext } from 'react-hook-form';

type FormInputProps = {
  name: string;
  required?: boolean;
  pattern?: ValidationRule<RegExp> | undefined;
} & InputProps;

export default function FormInput({
  required = false,
  pattern = undefined,
  ...props
}: FormInputProps) {
  const { register } = useFormContext();
  return (
    <Input
      border="none"
      borderRadius="9px"
      bg="#F3F5F6"
      type="string"
      {...props}
      {...register(props.name, { required: required, pattern })}
    />
  );
}
