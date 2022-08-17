import { createAction } from '@ngrx/store';

export enum LoadingActions {
  START = '[Loading] Start Loading Spinner',
  STOP = '[Loading] Stop Loading Spinner',
}

export const StartLoading = createAction(LoadingActions.START);

export const StopLoading = createAction(LoadingActions.STOP);
