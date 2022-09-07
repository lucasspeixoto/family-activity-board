import * as fromMessage from './message.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getMessageState =
  createFeatureSelector<fromMessage.MessageState>('message');

export const getMessages = createSelector(
  getMessageState,
  state => state.messages
);
