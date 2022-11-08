import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '@tasksC/add-task/add-task.component';
import * as fromApp from '@app/app.state';
import { Store } from '@ngrx/store';
import { getTasks } from '@tasksSt/tasks.selectors';
import { getUser } from '@authSt/auth.selectors';

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
    public readonly dialog: MatDialog,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  public handleAddTask(): void {
    this.dialog.open(AddTaskComponent, {
      minWidth: '45%',
    });
  }
}
