import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './reducers';

// Features selectors are Type Saved (Vão facilitar no mapeamento de seleção que queremos)

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState, // Sem featureSelector = (state) => state["auth"]
  auth => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  isLoggedIn => !isLoggedIn
);
