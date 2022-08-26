/* eslint-disable no-console */

import { Action, createReducer, on } from '@ngrx/store';
import { filterBillsList, setBills, setFilter } from './bills.actions';
import { filterByRange, filterByStatus, filterByType } from '@billsH/filters';

import { Bill } from '@billsM/bills.model';

interface Filters {
  type: number | null;
  range: number | null;
  status: number | null;
}

export interface BillsState {
  bills: Bill[];
  filteredBills: Bill[];
  filters: Filters;
}

export const initialState: BillsState = {
  bills: [], //MOCK_BILLS,
  filteredBills: [], //MOCK_BILLS,
  filters: {
    type: null,
    range: null,
    status: null,
  },
};

const _billsReducer = createReducer(
  initialState,
  on(setBills, (_state, { payload }) => {
    const { filters } = _state;
    return {
      bills: [...payload],
      filteredBills: [...payload],
      filters,
    };
  }),
  on(setFilter, (_state, { filter, value }) => {
    const {
      bills,
      filteredBills,
      filters,
      filters: { type, range, status },
    } = _state;
    const filterValue = value ? value : null;
    let newfilters = undefined;

    switch (filter) {
      case 'type':
        newfilters = {
          type: filterValue,
          range,
          status,
        };
        break;
      case 'range':
        newfilters = {
          type,
          range: filterValue,
          status,
        };
        break;
      case 'status':
        newfilters = {
          type,
          range,
          status: filterValue,
        };
        break;
      default:
        newfilters = filters;
    }

    return {
      bills,
      filteredBills,
      filters: newfilters,
    };
  }),
  on(filterBillsList, _state => {
    const {
      bills,
      filters,
      filters: { type, range, status },
    } = _state;

    let newBillsList = bills;

    //Filter Type
    if (type !== null) {
      newBillsList = filterByType(bills, type);
    }

    //Filter Status
    if (status !== null) {
      newBillsList = filterByStatus(newBillsList, status);
    }

    //Filter Range
    if (range !== null) {
      newBillsList = filterByRange(newBillsList, range);
    }

    return {
      bills,
      filteredBills: [...newBillsList],
      filters,
    };
  })
);

export const billsReducer = (state: BillsState | undefined, action: Action) => {
  return _billsReducer(state, action);
};
