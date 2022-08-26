import { createAction, props } from '@ngrx/store';

import { Bill } from '@billsM/bills.model';

export enum BillsActions {
  LOAD_BILLS = '[BILLS] Load all bills',
  SET_BILLS = '[BILLS] Set a new bills version',
  SET_FILTER = '[BILLS] Set a filter',
  FILTER_BILLS_LIST = '[BILLS] Filter bills list',
}

export const loadBills = createAction(BillsActions.LOAD_BILLS);

export const setBills = createAction(
  BillsActions.SET_BILLS,
  props<{ payload: Bill[] }>()
);

export const setFilter = createAction(
  BillsActions.SET_FILTER,
  props<{
    filter: string;
    value: number;
  }>()
);

export const filterBillsList = createAction(BillsActions.FILTER_BILLS_LIST);
