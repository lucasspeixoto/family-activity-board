import { Bill } from '@billsMd/bills.model';
import { getDateFromString } from '@sharedH/date.helper';
import { Notification } from '@sharedMd/notification.model';

export const getBillsNotifications = (bills: Bill[]): Notification => {
  const today = new Date().setHours(0, 0, 0, 0);

  const billsWithoutValue = bills.filter(item => item.value === null).length;
  const billsWithoutValuesAmount = billsWithoutValue > 0 ? 1 : 0;

  const billsToPayToday = bills.filter(
    bill => getDateFromString(bill.date) === today
  ).length;
  const billsToPayTodayAmount = billsToPayToday > 0 ? 1 : 0;

  const billsLate = bills.filter(
    bill => getDateFromString(bill.date) < today
  ).length;
  const billsLateAmount = billsLate > 0 ? 1 : 0;

  const billsNotification: Notification = {
    amount: billsWithoutValuesAmount + billsToPayTodayAmount + billsLateAmount,
    description: [
      {
        icon: 'notifications_none',
        value: billsWithoutValue,
        message:
          billsWithoutValue > 1
            ? `${billsWithoutValue} Contas sem valor!`
            : `${billsWithoutValue} Conta sem valor!`,
        class: 'notification-menu__icon_blue',
      },
      {
        icon: 'notification_important',
        value: billsToPayToday,
        message:
          billsToPayToday > 1
            ? `${billsToPayToday} Contas vencem hoje`
            : `${billsToPayToday} Conta vence hoje`,
        class: 'notification-menu__icon_yellow',
      },
      {
        icon: 'warning',
        value: billsLate,
        message:
          billsLate > 1
            ? `${billsLate} Contas atrasadas!`
            : `${billsLate} Conta atrasada!`,
        class: 'notification-menu__icon_dark-pink',
      },
    ],
  };

  return billsNotification;
};

export const orderBillsByDate = (bills: Bill[]): Bill[] => {
  const orderedBills = [...bills];
  return orderedBills.sort((first, second) =>
    getDateFromString(first.date)! > getDateFromString(second.date)! ? 1 : -1
  );
};
