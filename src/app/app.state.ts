import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '@authSt/auth.reducer';

import * as fromBills from '@billsSt/bills.reducer';

import * as fromLoading from '@sharedSt/loading/loading.reducer';
import * as fromMessage from '@sharedSt/message/message.reducer';

import * as fromTasks from '@tasksSt/tasks.reducer';

export interface AppState {
  auth: fromAuth.AuthState;
  loading: fromLoading.LoadingState;
  bills: fromBills.BillsState;
  message: fromMessage.MessageState;
  tasks: fromTasks.TasksState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  loading: fromLoading.loadingReducer,
  bills: fromBills.billsReducer,
  message: fromMessage.messageReducer,
  tasks: fromTasks.tasksReducer,
};
