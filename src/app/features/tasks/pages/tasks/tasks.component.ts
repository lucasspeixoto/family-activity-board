import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import * as fromApp from '@app/app.state';

import { User } from '@authMd/user.model';
import { getUser } from '@authSt/auth.selectors';

import { AddTaskComponent } from '@tasksC/add-task/add-task.component';
import { getTasks } from '@tasksSt/tasks.selectors';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  public tasks$ = this._store.select(getTasks);

  public readonly user$ = this._store.select(getUser);

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  public handleAddTask(user: User | undefined): void {
    this._dialog.open(AddTaskComponent, {
      minWidth: '35%',
      data: {
        user,
      },
    });
  }
}
