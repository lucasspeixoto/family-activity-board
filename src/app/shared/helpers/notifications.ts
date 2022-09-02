import { Bill } from '@billsM/bills.model';

export const getBillsWithoutValue = (bills: Bill[]): number => {
  const billsWithoutValues = bills.filter(item => item.value === null);

  return billsWithoutValues.length ? billsWithoutValues.length : 0;
};
