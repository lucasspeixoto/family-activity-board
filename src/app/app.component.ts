import * as fromApp from './app.state';

import {
  SetUserData,
  UpdateIsLoggedStatus,
} from './authentication/store/auth.actions';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component } from '@angular/core';
import { Messages } from './shared/messages/firebase';
import { Store } from '@ngrx/store';
import { User } from './authentication/models/authentication.model';
import { getIsLoading } from './shared/store/loading/loading.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly isLoading$ = this._store.select(getIsLoading);

  public authState$ = this.afAuth.authState.pipe(
    tap(user => {
      if (user) {
        const { email, photoURL, uid, displayName, emailVerified } =
          user as User;
        if (email && uid && displayName) {
          const loggedUser = {
            email,
            photoURL,
            uid,
            displayName,
            emailVerified,
          };
          this._store.dispatch(SetUserData({ payload: loggedUser }));
        }
      }

      const isLogged = user !== null ? true : false;
      this._store.dispatch(UpdateIsLoggedStatus({ payload: isLogged }));
    })
  );

  constructor(
    public afAuth: AngularFireAuth,
    public readonly afs: AngularFirestore,
    private readonly _store: Store<fromApp.AppState>
  ) {
    console.log(Messages['auth/session-cookie-revoked']);
  }
}
