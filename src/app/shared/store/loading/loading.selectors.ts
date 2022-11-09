import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLoading from './loading.reducer';

export const getLoadingState =
  createFeatureSelector<fromLoading.LoadingState>('loading');

export const getIsLoading = createSelector(
  getLoadingState,
  state => state.isLoading
);
