import { ChangeDetectionStrategy, Component } from '@angular/core';

import { menuItems } from '@constants/menu-routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public readonly menuItems = menuItems;
}
