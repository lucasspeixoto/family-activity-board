import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { first } from 'rxjs';

import { User } from '@authMd/user.model';

import { ConfirmationComponent } from '@sharedC/confirmation/confirmation.component';
import { DialogService } from '@sharedS/dialog/dialog.service';

import { TaskService } from '@tasksS/task.service';
import { Task } from '@tasksMd/task.model';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostItComponent {
  public readonly deleteTitle = 'Excluir Tarefa';
  public readonly deleteSubtitle = 'Deseja realmente excluir esta tarefa ?';

  @Input()
  public user!: User;

  @Input()
  public task!: Task;

  constructor(
    private readonly _dialog: MatDialog,
    private _dialogRef: MatDialogRef<ConfirmationComponent>,
    private readonly _dialogService: DialogService,
    private readonly _taskService: TaskService
  ) {}

  public handleDeleteTask(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this._dialogRef = this._dialog.open(ConfirmationComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this._dialogService.getDeleteDialogData(
        this.user.uid!,
        this.deleteTitle,
        this.deleteSubtitle
      ),
    });

    this._dialogRef.componentInstance.confirmClicked
      .pipe(first())
      .subscribe(() => {
        this._taskService.deleteTaskHandler(this.user.uid!, this.task.taskId!);
      });
  }
}
