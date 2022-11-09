import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import * as _ from 'lodash';

import * as fromApp from '@app/app.state';

import { DateService } from '@sharedS/date/date.service';

import { addTask, deleteTask } from '@tasksSt/tasks.actions';
import { Task } from '@tasksMd/task.model';

@Injectable()
export class TaskService {
  constructor(
    private readonly _store: Store<fromApp.AppState>,
    private readonly _dateService: DateService
  ) {}

  public addTaskHandler(
    task: Partial<Task>,
    userId: string,
    existingColors: number[]
  ): void {
    const { title, date } = task;

    const color = this.chooseRandomColor(existingColors);

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

  private chooseRandomColor(existingColors: number[]): number {
    const colorOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const nonExistingColors = _.difference(colorOptions, existingColors);

    if (nonExistingColors.length === 0) {
      // Todas as cores ja existem
      return colorOptions[Math.floor(Math.random() * colorOptions.length)];
    } else {
      // ALguma opção de cor não existe, escolhe entre as que faltam
      return nonExistingColors[
        Math.floor(Math.random() * nonExistingColors.length)
      ];
    }
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
