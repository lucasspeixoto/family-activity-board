import * as fromBills from './bills.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

const getBillsState = createFeatureSelector<fromBills.BillsState>('bills');

export const getBills = createSelector(getBillsState, state => state.bills);

export const getFilteredBills = createSelector(
  getBillsState,
  state => state.filteredBills
);

export const getTotalBillAmount = createSelector(getBillsState, state =>
  state.bills.map(item => item.value).reduce((a, b) => a + b)
);
