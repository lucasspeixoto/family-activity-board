import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';

import { getUser } from '@authSt/auth.selectors';

import { AddEditBillComponent } from '@billsC/add-edit-bill/add-edit-bill.component';
import { getBills, getFilteredBills } from '@billsSt/bills.selectors';
import { Bill } from '@billsMd/bills.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsComponent {
  public bills$ = this._store.select(getBills);

  public readonly user$ = this._store.select(getUser);

  public filteredBills$: Observable<Bill[]> =
    this._store.select(getFilteredBills);

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  public addNewBillHandler(): void {
    this._dialog.open(AddEditBillComponent, {
      minWidth: '45%',
      data: {
        type: 'add',
        bill: undefined,
      },
    });
  }
}
