import * as fromBills from './bills.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

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
