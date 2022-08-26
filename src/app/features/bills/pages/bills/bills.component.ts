import * as fromApp from '@app/app.state';

import { AddBillComponent } from '@billsC/add-bill/add-bill.component';
import { Component } from '@angular/core';
import { getBills } from '../../store/bills.selectors';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '@authM/user.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent {
  public user!: User | undefined;

  public user$!: Observable<User | undefined>;

  public bills$ = this._store.select(getBills);

  constructor(
    public readonly dialog: MatDialog,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  public addNewBillHandler(): void {
    this.dialog.open(AddBillComponent, {
      width: '40%',
      data: this.user,
    });
  }
}
