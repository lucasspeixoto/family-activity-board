import { Component } from '@angular/core';

import { MAT_DATE_FORMATS } from '@angular/material/core';

import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';

import { getIsLoading } from '@sharedSt/loading/loading.selectors';

import { MY_DATE_FORMATS } from '@constants/dates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
})
export class AppComponent {
  /**
   * @description
   * Observable que emite o objeto isLoading da store,
   * que pode ser true ou false, true caso alguma
   * tarefa esteja pendente e seja necessário informar
   * algum componente.
   *
   * @access public
   * @type Observable<boolean>
   *
   */
  public readonly isLoading$ = this._store.select(getIsLoading);

  constructor(private readonly _store: Store<fromApp.AppState>) {}
}
