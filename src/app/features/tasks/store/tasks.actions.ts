import { createAction, props } from '@ngrx/store';

import { Task } from '@tasksMd/task.model';

export enum TasksActions {
  LOAD_TASKS = '[TASKS] Load all tasks',
  SET_TASKS = '[TASKS] Set a new tasls version',
  ADD_TASK = '[BILLS] Add a new task',
  DELETE_TASK = '[BILLS] Delete a task',
  CLEAR_TASK_DATA = '[BILLS] Clear Task Data from Store',
}

export const loadTasks = createAction(
  TasksActions.LOAD_TASKS,
  props<{ payload: string | null }>()
);

export const setTasks = createAction(
  TasksActions.SET_TASKS,
  props<{ payload: Task[] }>()
);

export const addTask = createAction(
  TasksActions.ADD_TASK,
  props<{ url: string; task: Task }>()
);

export const deleteTask = createAction(
  TasksActions.DELETE_TASK,
  props<{
    url: string;
    taskId: string;
  }>()
);

export const clearTaskData = createAction(TasksActions.CLEAR_TASK_DATA);
