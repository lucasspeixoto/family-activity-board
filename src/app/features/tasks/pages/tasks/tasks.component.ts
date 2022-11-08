import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '@tasksC/add-task/add-task.component';
import * as fromApp from '@app/app.state';
import { Store } from '@ngrx/store';
import { getTasks } from '@tasksSt/tasks.selectors';
import { getUser } from '@authSt/auth.selectors';
import { User } from '@authMd/user.model';

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
