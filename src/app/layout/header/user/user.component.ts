import * as fromApp from '@app/app.state';

import { Component, EventEmitter, Output } from '@angular/core';

import { Store } from '@ngrx/store';
import { getUser } from '@authSt/auth.selectors';
import { routes } from '@constants/routes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;

  public readonly user$ = this._store.select(getUser);

  public readonly today = new Date();

  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
