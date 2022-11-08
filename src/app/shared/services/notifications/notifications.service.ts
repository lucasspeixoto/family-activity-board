import * as fromApp from '@app/app.state';

import { combineLatest, map, Observable, of } from 'rxjs';

import { getBillsNotification } from '@billsSt/bills.selectors';
import { Injectable } from '@angular/core';
import { Notification } from '@sharedMd/notification';
import { Store } from '@ngrx/store';
import { getTasksNotification } from '@app/features/tasks/store/tasks.selectors';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  public numberOfNotifications!: number;

  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public getBillsNotifications(): Observable<Notification> {
    return this._store.select(getBillsNotification);
  }

  public getTasksNotifications(): Observable<Notification> {
    return this._store.select(getTasksNotification);
  }

  public getNotificationsAmount(): Observable<number> {
    const notificationsAmount$ = combineLatest([
      this.getBillsNotifications(),
      this.getTasksNotifications(),
    ]).pipe(
      map(([billsAmount, tasksAmount]) => {
        return billsAmount.amount + tasksAmount.amount;
      })
    );

    return notificationsAmount$;
  }
}
