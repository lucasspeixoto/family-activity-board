import { Action, createReducer, on } from '@ngrx/store';
import { Task } from '@tasksMd/task.model';
import { addTask, clearTaskData, deleteTask, setTasks } from './tasks.actions';

export interface TasksState {
  tasks: Task[];
}

export const initialState: TasksState = {
  tasks: [],
};

const _tasksReducer = createReducer(
  initialState,
  on(setTasks, (_state, { payload }) => {
    return {
      tasks: [...payload],
    };
  }),
  on(addTask, (_state, { task }) => {
    const { tasks } = _state;
    return {
      tasks: [...tasks, task],
    };
  }),
  on(deleteTask, (_state, { taskId }) => {
    const { tasks } = _state;
    const newTasks = tasks.filter(task => task.taskId !== taskId);
    return {
      tasks: [...newTasks],
    };
  }),
  on(clearTaskData, () => {
    return {
      ...initialState,
    };
  })
);

export const tasksReducer = (
  state: TasksState | undefined,
  action: Action
): TasksState => {
  return _tasksReducer(state, action);
};
