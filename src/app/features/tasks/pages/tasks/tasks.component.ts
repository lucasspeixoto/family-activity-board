import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '@tasksC/add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  constructor(public readonly dialog: MatDialog) {}

  public handleAddTask(): void {
    this.dialog.open(AddTaskComponent, {
      minWidth: '45%',
    });
  }
}
