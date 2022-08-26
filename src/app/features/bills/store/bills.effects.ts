/* eslint-disable no-console */

import * as fromApp from '@app/app.state';
import * as fromBills from './bills.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';

@Injectable()
export class BillsEffects {
  public setFilter$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBills.setFilter),
        tap(() => this._store.dispatch(fromBills.filterBillsList()))
      ),
    { dispatch: false }
  );

  public loadBills$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBills.loadBills),
        tap(() => this._store.dispatch(fromBills.filterBillsList()))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly _store: Store<fromApp.AppState>,
    public readonly afs: AngularFirestore
  ) {}
}
