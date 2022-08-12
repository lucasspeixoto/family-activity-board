import { Component, EventEmitter, Input, Output } from '@angular/core';
import { routes } from '@app/config/routes';

interface User {
  name: string;
  lastName: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
