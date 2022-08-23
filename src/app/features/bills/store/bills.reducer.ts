/* eslint-disable no-console */

import { Action, createReducer, on } from '@ngrx/store';
import { filterBillsByType, setBills } from './bills.actions';

import { Bill } from '@billsM/bills.model';
import { MOCK_BILLS } from '@app/config/mocks/bills';

export interface BillsState {
  bills: Bill[];
  filteredBills: Bill[];
}

export const initialState: BillsState = {
  bills: MOCK_BILLS,
  filteredBills: MOCK_BILLS,
};

const _billsReducer = createReducer(
  initialState,
  on(setBills, (_state, { payload }) => {
    return {
      bills: [payload],
      filteredBills: [payload],
    };
  }),
  on(filterBillsByType, (_state, { value }) => {
    if (value === 0) {
      return {
        bills: [..._state.bills],
        filteredBills: [..._state.bills],
      };
    } else {
      const { bills } = _state;
      const filteredBills = bills.filter(bill => bill.type === value);
      return {
        bills: [..._state.bills],
        filteredBills: [...filteredBills],
      };
    }
  })
);

export const billsReducer = (state: BillsState | undefined, action: Action) => {
  return _billsReducer(state, action);
};
