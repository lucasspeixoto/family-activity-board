import * as fromApp from '@app/app.state';

import { AddEditBillComponent } from '../../components/add-edit-bill/add-edit-bill.component';
import { Component } from '@angular/core';
import { getBills } from '../../store/bills.selectors';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent {
  public bills$ = this._store.select(getBills);

  constructor(
    public readonly dialog: MatDialog,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  public addNewBillHandler(): void {
    this.dialog.open(AddEditBillComponent, {
      minWidth: '45%',
      data: {
        type: 'add',
        bill: undefined,
      },
    });
  }
}
