import * as fromAuth from '@authSt/auth.reducer';
import * as fromBills from '@billsSt/bills.reducer';
import * as fromLoading from '@sharedSt/loading/loading.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  loading: fromLoading.LoadingState;
  bills: fromBills.BillsState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  loading: fromLoading.loadingReducer,
  bills: fromBills.billsReducer,
};
