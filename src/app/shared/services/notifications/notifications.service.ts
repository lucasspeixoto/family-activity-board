import { Injectable } from '@angular/core';

import { combineLatest, map, Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';

import { getBillsNotification } from '@billsSt/bills.selectors';

import { Notification } from '@sharedMd/notification.model';

import { getTasksNotification } from '@tasksSt/tasks.selectors';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private readonly _store: Store<fromApp.AppState>) {}

  /**
   * @description
   * Retorna um select da store do calculo para
   * montagem o objeto de notificação de contas
   * @name getBillsNotifications
   * @access public
   * @return {Observable<Notification>}
   */
  public getBillsNotifications(): Observable<Notification> {
    return this._store.select(getBillsNotification);
  }

  /**
   * @description
   * Retorna um select da store do calculo para
   * montagem o objeto de notificação de tarefas
   * @name getTasksNotifications
   * @access public
   * @return {Observable<Notification>}
   */
  public getTasksNotifications(): Observable<Notification> {
    return this._store.select(getTasksNotification);
  }

  /**
   * @description
   * A partir dos observables das notificações
   * de contas e tarefas (getBillsNotifications e
   * getTasksNotifications) retorna um observable com
   * o total de notificações (amount)
   * @name getNotificationsAmount
   * @access public
   * @return {Observable<number>}
   */
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
