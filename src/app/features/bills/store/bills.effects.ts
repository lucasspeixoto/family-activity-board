/* eslint-disable no-console */

import * as fromApp from '@app/app.state';
import * as fromBills from './bills.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Bill } from '../models/bills.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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
        tap(action => {
          this.afs
            .collection<Bill>(`users/${action.payload}/bills`)
            .snapshotChanges()
            .pipe(
              map(actions =>
                actions.map(actionData => {
                  const billData = actionData.payload.doc.data();
                  const billId = actionData.payload.doc.id;
                  const bill = {
                    ...billData,
                    billId: billId,
                  };
                  return { ...bill };
                })
              )
            )
            .subscribe((bills: Bill[]) => {
              this._store.dispatch(fromBills.setBills({ payload: bills }));
            });

          /* this.afs
            .collection<Bill>(`users/${action.payload}/bills`)
            .valueChanges()
            .subscribe(bills => {
              console.log(bills);
              this._store.dispatch(fromBills.setBills({ payload: bills }));
            }); */
        })
      ),
    { dispatch: false }
  );

  public addBill$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBills.addBill),
        tap(async action => {
          await this.afs.collection(action.url).add(action.bill);
        })
      ),
    { dispatch: false }
  );

  public deleteBill$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBills.deleteBill),
        tap(async action => {
          console.log(action.billId);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly _store: Store<fromApp.AppState>,
    public readonly afs: AngularFirestore
  ) {}
}
