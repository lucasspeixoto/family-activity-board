/* eslint-disable no-console */

import * as fromApp from '@app/app.state';
import * as fromNotifications from './notifications.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { SnackbarService } from '@app/shared/services/snackbar/snackbar.service';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';

@Injectable()
export class NotificationsEffects {
  public loadNotifications$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromNotifications.loadBillsNotifications),
        tap(action => {
          const bill = action.payload;
          console.log(bill);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly _store: Store<fromApp.AppState>,
    private readonly _snackBarService: SnackbarService,
    public readonly afs: AngularFirestore
  ) {}
}
