import * as fromApp from './app.state';

import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getIsLoading } from '@sharedS/loading/loading.selectors';
import { getUser } from '@authSt/auth.selectors';
import { LoadUser } from '@authSt/auth.actions';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Store } from '@ngrx/store';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
})
export class AppComponent implements OnInit {
  public readonly isLoading$ = this._store.select(getIsLoading);

  public readonly user$ = this._store.select(getUser);

  constructor(
    public afAuth: AngularFireAuth,
    public readonly afs: AngularFirestore,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  public ngOnInit() {
    this._store.dispatch(LoadUser());
  }
}
