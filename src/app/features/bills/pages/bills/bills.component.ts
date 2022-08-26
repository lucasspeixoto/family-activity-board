import * as fromApp from '@app/app.state';

import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { AddBillComponent } from '@billsC/add-bill/add-bill.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Bill } from '../../models/bills.model';
import { getUser } from '@authSt/auth.selectors';
import { MatDialog } from '@angular/material/dialog';
import { setBills } from '@billsSt/bills.actions';
import { Store } from '@ngrx/store';
import { User } from '@authM/user.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  public user!: User | undefined;
  public user$!: Observable<User | undefined>;
  public bills$!: Observable<Bill[]>;

  constructor(
    public readonly dialog: MatDialog,
    private readonly _store: Store<fromApp.AppState>,
    public readonly afs: AngularFirestore
  ) {}

  public ngOnInit(): void {
    // Combine Observables
    this.user$ = this._store.select(getUser).pipe(
      tap(user => {
        this.user = user;
        this.afs
          .collection<Bill>(`users/${this.user?.uid}/bills`)
          .valueChanges()
          .subscribe(bills => {
            // eslint-disable-next-line no-console
            console.log(bills);
            this._store.dispatch(setBills({ payload: bills }));
          });
      })
    );
  }

  public addNewBillHandler(): void {
    this.dialog.open(AddBillComponent, {
      width: '40%',
      data: this.user,
    });
  }
}
