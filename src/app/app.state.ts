import * as fromAuth from './authentication/store/auth.reducer';
import * as fromLoading from '@sharedS/loading/loading.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  loading: fromLoading.LoadingState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  loading: fromLoading.loadingReducer,
};
