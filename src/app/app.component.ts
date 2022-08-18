import * as fromApp from './app.state';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component } from '@angular/core';
import { LoadUser } from '@authSt/auth.actions';
import { Store } from '@ngrx/store';
import { getIsLoading } from '@sharedS/loading/loading.selectors';
import { getUser } from '@authSt/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly isLoading$ = this._store.select(getIsLoading);

  public readonly user$ = this._store.select(getUser);

  constructor(
    public afAuth: AngularFireAuth,
    public readonly afs: AngularFirestore,
    private readonly _store: Store<fromApp.AppState>
  ) {
    this._store.dispatch(LoadUser());
  }
}
