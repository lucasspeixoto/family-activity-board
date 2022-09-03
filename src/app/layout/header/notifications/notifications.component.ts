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
  public readonly billsNotifications$ =
    this.notificationsService.getBillsNotifications();

  //* -------------------- Planejamentos -------------------- *//
  /**
   *
   */

  public readonly notificationsAmount$ = combineLatest([
    this.billsNotifications$,
    of(0), //Simulação de Próxima feature para quadro de notificações
  ]).pipe(
    map(([billsAmount, plansAmount]) => {
      return billsAmount.amount + plansAmount;
    })
  );

  constructor(
    public readonly notificationsService: NotificationsService,
    public elementRef: ElementRef
  ) {}
}
