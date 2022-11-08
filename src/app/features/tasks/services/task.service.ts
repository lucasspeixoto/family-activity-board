import * as fromApp from '@app/app.state';

import { Task } from '../models/task.model';

import { DateService } from '@sharedS/date/date.service';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTask, deleteTask } from '../store/tasks.actions';

@Injectable()
export class TaskService {
  constructor(
    private readonly _store: Store<fromApp.AppState>,
    private readonly _dateService: DateService
  ) {}

  public addTaskHandler(task: Partial<Task>, userId: string): void {
    const { title, date } = task;

    const color = this.chooseRandomColor();

    const newTask = {
      title: title!,
      date: this._dateService.formatDate(new Date(date!)),
      color,
    };

    this._store.dispatch(
      addTask({
        url: `users/${userId}/tasks`,
        task: newTask,
      })
    );
  }

  private chooseRandomColor(): number {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  public deleteTaskHandler(userId: string, taskId: string): void {
    this._store.dispatch(
      deleteTask({
        url: `users/${userId}/tasks`,
        taskId: taskId!,
      })
    );
  }
}
