import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';

import { getMessages } from '@sharedSt/message/message.selectors';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  public readonly messages$ = this._store.select(getMessages);

  constructor(private readonly _store: Store<fromApp.AppState>) {}
}
