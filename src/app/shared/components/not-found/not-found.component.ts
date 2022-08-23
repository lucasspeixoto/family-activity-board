import { Component } from '@angular/core';
import { routes } from '@constants/routes';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  public routes: typeof routes = routes;
}
