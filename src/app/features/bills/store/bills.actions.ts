import { createAction, props } from '@ngrx/store';

import { Bill } from '@billsMd/bills.model';

export enum BillsActions {
  LOAD_BILLS = '[BILLS] Load all bills',
  SET_BILLS = '[BILLS] Set a new bills version',
  SET_FILTER = '[BILLS] Set a filter',
  FILTER_BILLS_LIST = '[BILLS] Filter bills list',
  ADD_BILL = '[BILLS] Add a new bill',
  DELETE_BILL = '[BILLS] Delete a bill',
  EDIT_BILL = '[BILLS] Edit a bill',
  CLEAR_BILL_DATA = '[BILLS] Clear Bill Data from Store',
}

export const loadBills = createAction(
  BillsActions.LOAD_BILLS,
  props<{ payload: string | null }>()
);

export const setBills = createAction(
  BillsActions.SET_BILLS,
  props<{ payload: Bill[] }>()
);

export const addBill = createAction(
  BillsActions.ADD_BILL,
  props<{ url: string; bill: Bill }>()
);

export const setFilter = createAction(
  BillsActions.SET_FILTER,
  props<{
    filter: string;
    value: number;
  }>()
);

export const filterBillsList = createAction(BillsActions.FILTER_BILLS_LIST);

export const deleteBill = createAction(
  BillsActions.DELETE_BILL,
  props<{
    url: string;
    billId: string;
  }>()
);

export const editBill = createAction(
  BillsActions.EDIT_BILL,
  props<{
    url: string;
    bill: Bill;
  }>()
);

export const clearBillData = createAction(BillsActions.CLEAR_BILL_DATA);
