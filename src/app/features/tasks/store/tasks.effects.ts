import * as fromApp from '@app/app.state';

import * as fromTasks from './tasks.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StartLoading, StopLoading } from '@sharedSt/loading/loading.actions';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Messages } from '@sharedMs/firebase';
import { SnackbarService } from '@sharedS/snackbar/snackbar.service';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable()
export class TasksEffects {
  public loadTasks$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTasks.loadTasks),
        tap(action => {
          this._store.dispatch(StartLoading());
          this.afs
            .collection<Task>(`users/${action.payload}/tasks`)
            .snapshotChanges() //! valueChanges()
            .pipe(
              map(action =>
                action.map(actionData => {
                  const taskData = actionData.payload.doc.data();
                  const taskId = actionData.payload.doc.id;
                  return {
                    ...taskData,
                    taskId,
                  };
                })
              )
            )
            .subscribe((tasks: Task[]) => {
              this._store.dispatch(fromTasks.setTasks({ payload: tasks }));
              this._store.dispatch(StopLoading());
            });
        })
      ),
    { dispatch: false }
  );

  public addTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTasks.addTask),
        tap(async action => {
          this._store.dispatch(StartLoading());
          await this.afs
            .collection(action.url)
            .add(action.task)
            .then(() => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openSuccessSnackBar(
                'Tarefa Adicionada com sucesso!'
              );
            })
            .catch(error => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openFailureSnackBar(Messages[error.code]);
            });
        })
      ),
    { dispatch: false }
  );

  public deleteBill$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTasks.deleteTask),
        tap(async action => {
          this._store.dispatch(StartLoading());
          await this.afs
            .collection(action.url)
            .doc(action.taskId)
            .delete()
            .then(() => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openSuccessSnackBar(
                'Tarefa Excluída com sucesso!'
              );
            })
            .catch(error => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openFailureSnackBar(Messages[error.code]);
            });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly _store: Store<fromApp.AppState>,
    private readonly _snackBarService: SnackbarService,
    private readonly afs: AngularFirestore
  ) {}
}
