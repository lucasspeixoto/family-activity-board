import * as fromApp from './app.state';

import { Component } from '@angular/core';
import { getIsLoading } from '@sharedSt/loading/loading.selectors';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from '@constants/dates';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
})
export class AppComponent {
  public readonly isLoading$ = this._store.select(getIsLoading);

  constructor(private readonly _store: Store<fromApp.AppState>) {}
}
