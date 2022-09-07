import { Action, createReducer, on } from '@ngrx/store';
import {
  addBill,
  clearBillData,
  deleteBill,
  editBill,
  filterBillsList,
  setBills,
  setFilter,
} from './bills.actions';
import {
  filterByRange,
  filterBySpent,
  filterByStatus,
  filterByType,
} from '@billsH/filters.helper';

import { Bill } from '@billsMd/bills.model';

interface Filters {
  type: number | null;
  range: number | null;
  status: number | null;
  spent: number | null;
}

export interface BillsState {
  bills: Bill[];
  filteredBills: Bill[];
  filters: Filters;
}

export const initialState: BillsState = {
  bills: [],
  filteredBills: [],
  filters: {
    type: null,
    range: null,
    status: null,
    spent: null,
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
      filters: { type, range, status, spent },
    } = _state;
    const filterValue = value ? value : null;
    let newfilters = undefined;

    switch (filter) {
      case 'type':
        newfilters = {
          type: filterValue,
          range,
          status,
          spent,
        };
        break;
      case 'range':
        newfilters = {
          type,
          range: filterValue,
          status,
          spent,
        };
        break;
      case 'status':
        newfilters = {
          type,
          range,
          status: filterValue,
          spent,
        };
        break;
      case 'spent':
        newfilters = {
          type,
          range,
          status,
          spent: filterValue,
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
      filters: { type, range, status, spent },
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

    //Filter Spent
    if (spent !== null) {
      newBillsList = filterBySpent(newBillsList, spent);
    }

    return {
      bills,
      filteredBills: [...newBillsList],
      filters,
    };
  }),
  on(addBill, (_state, { bill }) => {
    const { bills, filteredBills, filters } = _state;
    return {
      bills: [...bills, bill],
      filteredBills,
      filters,
    };
  }),
  on(deleteBill, (_state, { billId }) => {
    const { bills, filteredBills, filters } = _state;
    const newBills = bills.filter(bill => bill.billId !== billId);
    return {
      bills: [...newBills],
      filteredBills,
      filters,
    };
  }),
  on(editBill, (_state, { bill }) => {
    const { bills, filteredBills, filters } = _state;

    const newBillsList = bills.map(item =>
      item.billId === bill.billId ? bill : item
    );

    return {
      bills: [...newBillsList],
      filteredBills,
      filters,
    };
  }),
  on(clearBillData, () => {
    return {
      ...initialState,
    };
  })
);

export const billsReducer = (
  state: BillsState | undefined,
  action: Action
): BillsState => {
  return _billsReducer(state, action);
};
