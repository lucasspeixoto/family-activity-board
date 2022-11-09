import { getDateFromString } from '@sharedH/date.helper';
import { Notification } from '@sharedMd/notification.model';
import { Task } from '../models/task.model';

export const getTasksNotifications = (tasks: Task[]): Notification => {
  const today = new Date().setHours(0, 0, 0, 0);

  const tasksToDoToday = tasks.filter(
    bill => getDateFromString(bill.date) === today
  ).length;
  const tasksToDoTodayAmount = tasksToDoToday > 0 ? 1 : 0;

  const tasksLate = tasks.filter(
    bill => getDateFromString(bill.date) < today
  ).length;
  const tasksLateAmount = tasksLate > 0 ? 1 : 0;

  const billsNotification: Notification = {
    amount: tasksToDoTodayAmount + tasksLateAmount,
    description: [
      {
        icon: 'notification_important',
        value: tasksToDoToday,
        message:
          tasksToDoToday > 1
            ? `${tasksToDoToday} Tarefas para hoje`
            : `${tasksToDoToday} Tarefa para hoje`,
        class: 'notification-menu__icon_yellow',
      },
      {
        icon: 'warning',
        value: tasksLate,
        message:
          tasksLate > 1
            ? `${tasksLate} Tarefas atrasadas!`
            : `${tasksLate} Tarefa atrasada!`,
        class: 'notification-menu__icon_dark-pink',
      },
    ],
  };

  return billsNotification;
};
