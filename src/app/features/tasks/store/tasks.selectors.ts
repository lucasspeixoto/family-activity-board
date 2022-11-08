import * as fromTasks from './tasks.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getTasksNotifications } from '../helpers/tasks-notifications.helper';

const getTasksState = createFeatureSelector<fromTasks.TasksState>('tasks');

export const getTasks = createSelector(getTasksState, state => state.tasks);

export const getTasksNotification = createSelector(getTasks, tasks => {
  const tasksNotifications = getTasksNotifications(tasks);

  return tasksNotifications;
});

export const getExistingTasksColors = createSelector(getTasks, tasks => {
  const colors = tasks.map(task => task.color);

  return colors;
});
