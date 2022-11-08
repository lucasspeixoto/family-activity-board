import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { addTaskForm } from '@constants/bill-forms';

import { TaskService } from '@tasksS/task.service';
import { Task } from '@tasksMd/task.model';
import { User } from '@authMd/user.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';
import { getExistingTasksColors } from '../../store/tasks.selectors';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  public addNewTaskForm = this._formBuilder.group({ ...addTaskForm });

  public readonly colors$ = this._store.select(getExistingTasksColors);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _taskService: TaskService,
    private readonly _store: Store<fromApp.AppState>,
    @Inject(MAT_DIALOG_DATA)
    public data: { user: User | undefined }
  ) {}

  public addNewTaskHandler(colors: number[]): void {
    const newTask = this.addNewTaskForm.value as Partial<Task>;
    this._taskService.addTaskHandler(newTask, this.data.user!.uid!, colors);
  }
}
