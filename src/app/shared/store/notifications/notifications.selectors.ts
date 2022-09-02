import * as fromNotifications from './notifications.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getNotificationsState =
  createFeatureSelector<fromNotifications.NotificationsState>('notifications');

export const getNumberOfNotifications = createSelector(
  getNotificationsState,
  state => state.number
);
