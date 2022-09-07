import * as fromAuth from '@authSt/auth.reducer';
import * as fromBills from '@billsSt/bills.reducer';
import * as fromLoading from '@sharedSt/loading/loading.reducer';
import * as fromMessage from '@sharedSt/message/message.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  loading: fromLoading.LoadingState;
  bills: fromBills.BillsState;
  message: fromMessage.MessageState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  loading: fromLoading.loadingReducer,
  bills: fromBills.billsReducer,
  message: fromMessage.messageReducer,
};
