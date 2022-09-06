import * as fromApp from '@app/app.state';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AddEditBillComponent } from '@billsC/add-edit-bill/add-edit-bill.component';
import { getBills } from '@billsSt/bills.selectors';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
