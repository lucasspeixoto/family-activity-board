import * as fromBills from './bills.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getDateFromString } from '../helpers/filters';
import { Notification } from '@sharedMd/notification';

const getBillsState = createFeatureSelector<fromBills.BillsState>('bills');

export const getBills = createSelector(getBillsState, state => state.bills);

export const getFilteredBills = createSelector(
  getBillsState,
  state => state.filteredBills
);

export const getTotalBillAmount = createSelector(getBillsState, state => {
  const billsValues = state?.bills.map(item => item.value);
  if (billsValues.length) {
    return billsValues.reduce((a, b) => a + b);
  } else {
    return 0;
  }
});

export const getBillsNotifications = createSelector(getBills, bills => {
  const today = new Date().setHours(0, 0, 0, 0);
  const billsWithoutValues =
    bills.filter(item => item.value === null).length > 0 ? 1 : 0;
  const billsToPayToday =
    bills.filter(bill => getDateFromString(bill.date) === today).length > 0
      ? 1
      : 0;

  const billsLate =
    bills.filter(bill => getDateFromString(bill.date) < today).length > 0
      ? 1
      : 0;

  const billsNotifications: Notification = {
    amount: billsWithoutValues + billsToPayToday + billsLate,
    description: [
      {
        icon: 'notifications_none',
        value: billsWithoutValues,
        message: `${billsWithoutValues} Conta(s) sem valor!`,
        color: 'primary',
      },
      {
        icon: 'notification_important',
        value: billsToPayToday,
        message: `${billsToPayToday} Conta(s) vence(m) hoje`,
        color: 'accent',
      },
      {
        icon: 'warning',
        value: billsLate,
        message: `${billsLate} Conta(s) atrasada(s)!`,
        color: 'warn',
      },
    ],
  };

  return billsNotifications;
});
