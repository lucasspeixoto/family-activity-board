import * as fromApp from '@app/app.state';
import * as fromBills from './bills.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StartLoading, StopLoading } from '@sharedSt/loading/loading.actions';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Bill } from '@billsMd/bills.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Messages } from '@sharedMs/firebase';
import { SnackbarService } from '@sharedS/snackbar/snackbar.service';
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
          this._store.dispatch(StartLoading());
          this.afs
            .collection<Bill>(`users/${action.payload}/bills`)
            .snapshotChanges() //! valueChanges()
            .pipe(
              map(action =>
                action.map(actionData => {
                  const billData = actionData.payload.doc.data();
                  const billId = actionData.payload.doc.id;
                  return {
                    ...billData,
                    billId,
                  };
                })
              )
            )
            .subscribe((bills: Bill[]) => {
              this._store.dispatch(fromBills.setBills({ payload: bills }));
              this._store.dispatch(StopLoading());
            });
        })
      ),
    { dispatch: false }
  );

  public addBill$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBills.addBill),
        tap(async action => {
          this._store.dispatch(StartLoading());
          await this.afs
            .collection(action.url)
            .add(action.bill)
            .then(() => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openSuccessSnackBar(
                'Conta Adicionada com sucesso!'
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
        ofType(fromBills.deleteBill),
        tap(async action => {
          this._store.dispatch(StartLoading());
          await this.afs
            .collection(action.url)
            .doc(action.billId)
            .delete()
            .then(() => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openSuccessSnackBar(
                'Conta Excluída com sucesso!'
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

  public editBill$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBills.editBill),
        tap(async action => {
          this._store.dispatch(StartLoading());
          const { url, bill } = action;
          await this.afs
            .collection(url)
            .doc(bill.billId)
            .update(bill)
            .then(() => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openSuccessSnackBar(
                'Alteração realizada com sucesso!'
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
