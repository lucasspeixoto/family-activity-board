import { Component } from '@angular/core';
import { routes } from '@app/config/routes';

@Component({
  selector: 'app-sideba-2',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public routes: typeof routes = routes;
  public isOpenUiElements = false;

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
