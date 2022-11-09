import { Action, createReducer, on } from '@ngrx/store';

import { StartLoading, StopLoading } from './loading.actions';

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const _loadingReducer = createReducer(
  initialState,
  on(StartLoading, () => {
    return {
      isLoading: true,
    };
  }),
  on(StopLoading, () => {
    return {
      isLoading: false,
    };
  })
);

export const loadingReducer = (
  state: LoadingState | undefined,
  action: Action
): LoadingState => _loadingReducer(state, action);
