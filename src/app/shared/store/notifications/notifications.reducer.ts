import { Action, createReducer, on } from '@ngrx/store';
import {
  increaseNotification,
  loadBillsNotifications,
} from './notifications.actions';

import { getBillsWithoutValue } from '@app/shared/helpers/notifications';

interface Notifications {
  message: string;
  icon: string;
}

export interface NotificationsState {
  number: number;
  notifications: Notifications[];
}

const initialState: NotificationsState = {
  number: 0,
  notifications: [],
};

const _notificationsReducer = createReducer(
  initialState,
  on(increaseNotification, _state => {
    const { number, notifications } = _state;
    return {
      number: number + 1,
      notifications,
    };
  }),
  on(loadBillsNotifications, (_state, { payload }) => {
    const { number, notifications } = _state;
    const bills = payload;
    const billsWithoutValueAmount = getBillsWithoutValue(bills);
    if (billsWithoutValueAmount > 0) {
      const notification = {
        message: `Existe um total de ${billsWithoutValueAmount} contas sem valor!`,
        icon: 'notifications_none',
      };
      return {
        number: number + billsWithoutValueAmount,
        notifications: [...notifications, notification],
      };
    } else {
      return {
        number,
        notifications,
      };
    }
  })
);

export const notificationsReducer = (
  state: NotificationsState | undefined,
  action: Action
) => _notificationsReducer(state, action);
