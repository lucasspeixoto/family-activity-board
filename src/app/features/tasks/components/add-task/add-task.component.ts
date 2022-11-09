import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';

import { User } from '@authMd/user.model';

import { addTaskForm } from '@constants/bill-forms';

import { getExistingTasksColors } from '@tasksSt/tasks.selectors';
import { TaskService } from '@tasksS/task.service';
import { Task } from '@tasksMd/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  public addNewTaskForm = this._formBuilder.group({ ...addTaskForm });

  public readonly colors$ = this._store.select(getExistingTasksColors);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _taskService: TaskService,
    private readonly _store: Store<fromApp.AppState>,
    @Inject(MAT_DIALOG_DATA)
    private readonly _data: { user: User | undefined }
  ) {}

  public addNewTaskHandler(colors: number[]): void {
    const newTask = this.addNewTaskForm.value as Partial<Task>;
    this._taskService.addTaskHandler(newTask, this._data.user!.uid!, colors);
  }
}
