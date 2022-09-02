import * as fromApp from '@app/app.state';

import { Component } from '@angular/core';
import { getBillsWithoutValueAmount } from '@billsSt/bills.selectors';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  public billsWithoutValue!: number;
  public readonly billsWithoutValue$ = this._store
    .select(getBillsWithoutValueAmount)
    .pipe(tap(value => (this.billsWithoutValue = value)));

  constructor(private readonly _store: Store<fromApp.AppState>) {}
}
