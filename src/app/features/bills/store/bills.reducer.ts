/* eslint-disable no-console */
import { Action, createReducer, on } from '@ngrx/store';
import { filterBillsByType, setBills } from './bills.actions';

import { Bill } from '@billsM/bills.model';

export interface BillsState {
  bills: Bill[];
}

export const initialState: BillsState = {
  bills: [
    {
      title: 'Conta de Água',
      type: 1,
      value: 66,
      date: '22/08/2022',
      owner: 'Lucas Peixoto',
      status: 2,
    },
    {
      title: 'Internet',
      type: 1,
      value: 126,
      date: '18/08/2022',
      owner: 'Lucas Peixoto',
      status: 1,
    },
    {
      title: 'Aluguel',
      type: 1,
      value: 1350,
      date: '05/08/2022',
      owner: 'Lucas Peixoto',
      status: 1,
    },
    {
      title: 'Cartão Itaú Lucas',
      type: 2,
      value: 760,
      date: '29/08/2022',
      owner: 'Lucas Peixoto',
      status: 1,
    },
    {
      title: 'Cartão Santander Lucas',
      type: 2,
      value: 460,
      date: '20/08/2022',
      owner: 'Lucas Peixoto',
      status: 1,
    },
    {
      title: 'Cartão Bradesco Liana',
      type: 2,
      value: 460,
      date: '17/08/2022',
      owner: 'Liana Fernandes',
      status: 1,
    },
    {
      title: 'Cartão Carrefour',
      type: 4,
      value: 460,
      date: '27/08/2022',
      owner: 'Liana Fernandes',
      status: 3,
    },
    {
      title: 'Faculdade Liana',
      type: 1,
      value: 460,
      date: '14/08/2022',
      owner: 'Liana Fernandes',
      status: 2,
    },
  ],
};

const _billsReducer = createReducer(
  initialState,
  on(setBills, (_state, { payload }) => {
    return {
      bills: [payload],
    };
  }),
  on(filterBillsByType, (_state, { payload }) => {
    const { bills } = _state;
    const filteredBills = bills.filter(bill => bill.type === payload);
    console.log(filteredBills);
    return {
      bills: [...filteredBills],
    };
  })
);

export const billsReducer = (state: BillsState | undefined, action: Action) => {
  return _billsReducer(state, action);
};
