import * as fromApp from '@app/app.state';

import { combineLatest, map, Observable, of } from 'rxjs';

import { getBillsNotification } from '@billsSt/bills.selectors';
import { Injectable } from '@angular/core';
import { Notification } from '@sharedMd/notification';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  public numberOfNotifications!: number;

  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public getBillsNotifications(): Observable<Notification> {
    return this._store.select(getBillsNotification);
  }

  public getNotificationsAmount(): Observable<number> {
    const notificationsAmount$ = combineLatest([
      this.getBillsNotifications(),
      of(0), //Simulação de Próxima feature para quadro de notificações
    ]).pipe(
      map(([billsAmount, plansAmount]) => {
        return billsAmount.amount + plansAmount;
      })
    );

    return notificationsAmount$;
  }
}
