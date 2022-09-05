import { ChangeDetectionStrategy, Component } from '@angular/core';

import { appRoutes } from '@routes/app-routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public appRoutes: typeof appRoutes = appRoutes;
}
