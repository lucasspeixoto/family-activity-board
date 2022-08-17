import * as fromAuth from './auth.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const getUser = createSelector(getAuthState, state => state.user);

export const getIsUserLoggedIn = createSelector(
  getAuthState,
  state => state.isLogged
);
