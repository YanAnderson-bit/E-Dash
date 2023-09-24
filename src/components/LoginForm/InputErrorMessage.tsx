import { Text } from '@chakra-ui/react';

import styles from './styles';

export default function InputErrorMessage({ show, children }: any) {
  if (!show) return;
  return <Text sx={styles.inputError}>{children}</Text>;
}
