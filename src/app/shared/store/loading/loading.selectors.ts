import * as fromLoading from './loading.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getLoadingState =
  createFeatureSelector<fromLoading.LoadingState>('loading');

export const getIsLoading = createSelector(
  getLoadingState,
  state => state.isLoading
);
