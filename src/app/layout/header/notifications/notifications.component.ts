import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

import { NotificationsService } from '@sharedS/notifications/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {
  public readonly tasksNotifications$ =
    this.notificationsService.getTasksNotifications();

  public readonly billsNotifications$ =
    this.notificationsService.getBillsNotifications();

  public readonly notificationsAmount$ =
    this.notificationsService.getNotificationsAmount();

  constructor(
    public readonly notificationsService: NotificationsService,
    public elementRef: ElementRef
  ) {}
}
