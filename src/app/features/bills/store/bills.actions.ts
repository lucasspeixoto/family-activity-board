import { createAction, props } from '@ngrx/store';

import { Bill } from '../models/bills.model';

export enum BillsActions {
  LOAD_BILLS = '[BILLS] Load all bills',
  SET_BILLS = '[BILLS] Set a new bills version',
  FILTER_BILLS_BY_TYPE = '[BILLS] Filter the bills list by type',
}

export const loadBills = createAction(BillsActions.LOAD_BILLS);

export const setBills = createAction(
  BillsActions.SET_BILLS,
  props<{
    payload: Bill;
  }>()
);

export const filterBillsByType = createAction(
  BillsActions.FILTER_BILLS_BY_TYPE,
  props<{
    payload: number;
  }>()
);
