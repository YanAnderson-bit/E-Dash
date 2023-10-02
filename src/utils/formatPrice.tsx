/* eslint-disable @typescript-eslint/no-explicit-any */
const defaultPriceFormat = { style: 'currency', currency: 'BRL' };

export default (
  value: string | number,
  options: any = defaultPriceFormat
): string => {
  if ((!value && value !== 0) || Number.isNaN(value)) return 'R$ 0,00';
  return Number(value).toLocaleString('pt-BR', options);
};
