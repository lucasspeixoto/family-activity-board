import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { addTaskForm } from '@constants/bill-forms';

import * as fromApp from '@app/app.state';
import { getUserUid } from '@app/authentication/store/auth.selectors';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { TaskService } from '@tasksS/task.service';
import { Task } from '@tasksMd/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  public addNewTaskForm = this._formBuilder.group({ ...addTaskForm });

  public userId!: string;

  public readonly userId$ = this._store
    .select(getUserUid)
    .pipe(tap(uid => (this.userId = uid!)));

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _store: Store<fromApp.AppState>,
    private readonly _taskService: TaskService
  ) {}

  public addNewTaskHandler(): void {
    const newTask = this.addNewTaskForm.value as Partial<Task>;
    this._taskService.addTaskHandler(newTask, this.userId);
  }
}
