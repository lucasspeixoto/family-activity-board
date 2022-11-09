import { Select } from '@sharedMd/select.model';

export const typeOptions: Select[] = [
  { value: 1, viewValue: 'Contas (Ex: Energia, água, etc...' },
  { value: 2, viewValue: 'Cartão de Crédito' },
  { value: 3, viewValue: 'Faculdade' },
  { value: 4, viewValue: 'Cartão Supermercado' },
];

export const rangeOptions: Select[] = [
  { value: 1, viewValue: 'R$1 - R$50' },
  { value: 2, viewValue: 'R$51 - R$100' },
  { value: 3, viewValue: 'R$101 - R$200' },
  { value: 4, viewValue: 'R$201 - R$500' },
  { value: 5, viewValue: 'R$501 - R$1000' },
  { value: 6, viewValue: 'Acima de R$1000' },
];

export const statusOptions: Select[] = [
  { value: 1, viewValue: 'Atrasado' },
  { value: 2, viewValue: 'Vence Hoje' },
  { value: 3, viewValue: 'Em dia' },
];

export const spentOptions: Select[] = [
  { value: 1, viewValue: 'Fixo' },
  { value: 2, viewValue: 'Variável' },
];
