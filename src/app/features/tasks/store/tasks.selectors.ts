import * as fromTasks from './tasks.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

const getTasksState = createFeatureSelector<fromTasks.TasksState>('tasks');

export const getBills = createSelector(getTasksState, state => state.tasks);
