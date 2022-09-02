import * as fromApp from '@app/app.state';

import { Component, EventEmitter, Output } from '@angular/core';

import { appRoutes } from '@routes/app-routes';
import { getUser } from '@authSt/auth.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Output() public readonly signOut: EventEmitter<void> =
    new EventEmitter<void>();
  public appRoutes: typeof appRoutes = appRoutes;

  public readonly user$ = this._store.select(getUser);

  public readonly today = new Date();

  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
