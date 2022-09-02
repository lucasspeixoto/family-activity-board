import { createAction, props } from '@ngrx/store';

import { Bill } from '@app/features/bills/models/bills.model';

export enum NotificationsActions {
  INCREASE_NOTIFICATION = '[Notifications] Include one more notification',
  LOAD_BILLS_NOTIFICATIONS = '[Notifications] Load Bills Notifications',
}

export const increaseNotification = createAction(
  NotificationsActions.INCREASE_NOTIFICATION
);

export const loadBillsNotifications = createAction(
  NotificationsActions.LOAD_BILLS_NOTIFICATIONS,
  props<{ payload: Bill[] }>()
);
