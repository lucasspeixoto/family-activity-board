import * as fromApp from './app.state';

import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getIsLoading } from '@sharedS/loading/loading.selectors';
import { getUser } from '@authSt/auth.selectors';
import { LoadUser } from '@authSt/auth.actions';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from './config/constants/dates';
import { Store } from '@ngrx/store';

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
