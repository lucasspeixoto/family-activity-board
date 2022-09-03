import { combineLatest, of } from 'rxjs';
import { Component, ElementRef } from '@angular/core';

import { map } from 'rxjs/operators';
import { NotificationsService } from '@app/shared/services/notifications/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  //? ------------------------ Contas ------------------------ ?//
  public billsWithoutValue$ = this.notificationsService.getBillsWithoutValue();
  public billsToPayToday$ = this.notificationsService.getBillsToPayToday();
  public billsLate$ = this.notificationsService.getBillsLate();
  public billsNotificationsAmount$ =
    this.notificationsService.getBillsNotificationsAmount();

  //* -------------------- Planejamentos -------------------- *//
  /**
   *
   */

  public readonly notificationsAmount$ = combineLatest([
    this.billsNotificationsAmount$,
    of(0), //Simulação de Próxima feature para quadro de notificações
  ]).pipe(
    map(([billsAmount, plansAmount]) => {
      return billsAmount + plansAmount;
    })
  );

  constructor(
    public readonly notificationsService: NotificationsService,
    public elementRef: ElementRef
  ) {}
}
