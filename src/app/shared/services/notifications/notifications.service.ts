import * as fromApp from '@app/app.state';

import {
  getBillsNotificationsAmount,
  getBillsToPayToday,
  getBillsWithoutValueAmount,
  getLateBills,
} from '@billsSt/bills.selectors';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  //? ------------------------ Contas ------------------------ ?//

  //* -------------------- Planejamentos -------------------- *//

  //! ------------------------ Geral ------------------------ !//
  public numberOfNotifications!: number;

  constructor(private readonly _store: Store<fromApp.AppState>) {}

  //? ------------------------ Contas ------------------------ ?//
  public getBillsWithoutValue(): Observable<number> {
    return this._store.select(getBillsWithoutValueAmount);
  }
  public getBillsToPayToday(): Observable<number> {
    return this._store.select(getBillsToPayToday);
  }
  public getBillsLate(): Observable<number> {
    return this._store.select(getLateBills);
  }
  public getBillsNotificationsAmount(): Observable<number> {
    return this._store.select(getBillsNotificationsAmount);
  }

  //* -------------------- Planejamentos --------------------- *//
  /**
   *
   */
}
