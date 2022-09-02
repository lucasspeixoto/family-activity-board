import { appRoutes } from '@routes/app-routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public appRoutes: typeof appRoutes = appRoutes;
}
