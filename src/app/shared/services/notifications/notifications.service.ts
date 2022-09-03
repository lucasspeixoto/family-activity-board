import * as fromApp from '@app/app.state';

import { getBillsNotifications } from '@billsSt/bills.selectors';
import { Injectable } from '@angular/core';
import { Notification } from '@sharedMd/notification';
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
  public getBillsNotifications(): Observable<Notification> {
    return this._store.select(getBillsNotifications);
  }

  //* -------------------- Planejamentos --------------------- *//
  /**
   *
   */
}
