import * as fromAuth from './auth.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const getUser = createSelector(getAuthState, state => state?.user);

export const getUserUid = createSelector(getUser, user => user?.uid);

export const getIsUserLoggedIn = createSelector(
  getAuthState,
  state => state.isLogged
);
