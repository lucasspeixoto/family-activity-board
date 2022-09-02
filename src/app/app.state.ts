import * as fromAuth from '@authSt/auth.reducer';
import * as fromBills from '@billsSt/bills.reducer';
import * as fromLoading from '@sharedSt/loading/loading.reducer';
import * as fromNotifications from '@sharedSt/notifications/notifications.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  loading: fromLoading.LoadingState;
  bills: fromBills.BillsState;

  notifications: fromNotifications.NotificationsState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  loading: fromLoading.loadingReducer,
  bills: fromBills.billsReducer,

  notifications: fromNotifications.notificationsReducer,
};
