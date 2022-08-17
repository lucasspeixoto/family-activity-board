import * as fromApp from '@app/app.state';

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Logout } from '@authSt/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isMenuOpened!: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();

  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this._store.dispatch(Logout());
  }
}
