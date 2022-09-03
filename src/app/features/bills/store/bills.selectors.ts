import * as fromBills from './bills.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getDateFromString } from '../helpers/filters';

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

export const getBillsWithoutValueAmount = createSelector(getBills, bills => {
  const billsWithoutValues = bills.filter(item => item.value === null);
  return billsWithoutValues.length;
});

export const getBillsToPayToday = createSelector(getBills, bills => {
  const today = new Date().setHours(0, 0, 0, 0);
  const billsToPayToday = bills.filter(
    bill => getDateFromString(bill.date) === today
  );

  return billsToPayToday.length;
});

export const getLateBills = createSelector(getBills, bills => {
  const today = new Date().setHours(0, 0, 0, 0);
  const lateBills = bills.filter(bill => getDateFromString(bill.date) < today);
  return lateBills.length;
});

export const getBillsNotificationsAmount = createSelector(getBills, bills => {
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

  return billsWithoutValues + billsToPayToday + billsLate;
});
