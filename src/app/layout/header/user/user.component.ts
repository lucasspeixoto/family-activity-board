import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';

import { getUser } from '@authSt/auth.selectors';

import { menuItems } from '@constants/menu-routes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Output() public readonly signOut: EventEmitter<void> =
    new EventEmitter<void>();

  public readonly menuItems = menuItems;

  public readonly user$ = this._store.select(getUser);

  public readonly today = new Date();

  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
