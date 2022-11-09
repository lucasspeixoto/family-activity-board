import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';

import { Logout } from '@authSt/auth.actions';

import { loadMessages } from '@sharedSt/message/message.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() public isMenuOpened!: boolean;
  @Output() public isShowSidebar = new EventEmitter<boolean>();

  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public ngOnInit(): void {
    this._store.dispatch(loadMessages());
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this._store.dispatch(Logout());
  }
}
