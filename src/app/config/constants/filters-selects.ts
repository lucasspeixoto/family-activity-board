import { Select } from '@sharedMd/select';

export const typeOptions: Select[] = [
  { value: 1, viewValue: 'Contas (Ex: Energia, água, etc...' },
  { value: 2, viewValue: 'Cartão de Crédito' },
  { value: 3, viewValue: 'Faculdade' },
  { value: 4, viewValue: 'Cartão Supermercado' },
];

export const dateOptions: Select[] = [
  { value: 1, viewValue: 'Hoje' },
  { value: 2, viewValue: 'Semana Anterior' },
  { value: 3, viewValue: 'Semana Atual' },
  { value: 4, viewValue: 'Mês' },
  { value: 5, viewValue: 'Ano' },
];

export const statusOptions: Select[] = [
  { value: 1, viewValue: 'Atrasado' },
  { value: 2, viewValue: 'Vence Hoje' },
  { value: 3, viewValue: 'Em dia' },
];
