import * as fromBills from './bills.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getBillsNotifications } from '@billsH/bills-notifications.helper';

const getBillsState = createFeatureSelector<fromBills.BillsState>('bills');

export const getBills = createSelector(getBillsState, state => state.bills);

export const getFilteredBills = createSelector(
  getBillsState,
  state => state.filteredBills
);

export const getTotalBillAmount = createSelector(getBillsState, state => {
  const billsValues = state?.bills.map(bill => bill.value);
  if (billsValues.length) {
    return billsValues.reduce(
      (firstBill, secondBill) => firstBill + secondBill
    );
  } else {
    return 0;
  }
});

export const getBillsNotification = createSelector(getBills, bills => {
  const billsNotifications = getBillsNotifications(bills);

  return billsNotifications;
});
