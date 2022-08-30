import * as fromApp from '@app/app.state';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Injectable, NgZone } from '@angular/core';
import {
  SendEmailVerification,
  SetNewUserData,
  SetUserData,
  UpdateIsLoggedStatus,
  UpdateProfile,
} from './auth.actions';
import { StartLoading, StopLoading } from '@sharedSt/loading/loading.actions';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthActions } from './action-types';
import { AuthenticationService } from '@authS/authentication.service';
import { loadBills } from '@app/features/bills/store/bills.actions';
import { Messages } from '@app/shared/messages/firebase';
import { Router } from '@angular/router';
import { SnackbarService } from '@app/shared/services/snackbar/snackbar.service';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { User } from '@authM/user.model';

@Injectable()
export class AuthEffects {
  public login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.Login),
        tap(async action => {
          this._store.dispatch(StartLoading());
          const { email, password } = action.payload;
          await this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then(result => {
              const user = result.user as User;
              if (user) {
                const loggedUser = {
                  displayName: user.displayName,
                  uid: user.uid,
                  photoURL: user.photoURL,
                  emailVerified: user.emailVerified,
                  email: user.email,
                };

                this._store.dispatch(SetUserData({ payload: loggedUser }));
                this.router.navigateByUrl('/bills');
                this._store.dispatch(StopLoading());
                this._snackBarService.openSuccessSnackBar(
                  'Bem vindo ao Quadro Familiar 😁'
                );
              }
            })
            .catch(error => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openFailureSnackBar(Messages[error.code]);
            });
        })
      ),
    { dispatch: false }
  );

  public signup$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.Signup),
        tap(action => {
          this._store.dispatch(StartLoading());
          const { name, email, password } = action.payload;
          this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
              const user = result.user as User;
              if (user) {
                const newUser = {
                  displayName: name,
                  uid: user.uid,
                  photoURL: user.photoURL,
                  emailVerified: user.emailVerified,
                  email: user.email,
                };

                this._store.dispatch(SetNewUserData({ payload: newUser }));
                this._store.dispatch(SendEmailVerification());
              }
            })
            .catch(error => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openFailureSnackBar(Messages[error.code]);
            });
        })
      ),
    { dispatch: false }
  );

  public sendEmailVerification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.SendEmailVerification),
        tap(() => {
          this.afAuth.currentUser
            .then(user => user!.sendEmailVerification())
            .then(() => {
              this.router.navigateByUrl('/bills');
              this._store.dispatch(StopLoading());
              this._snackBarService.openSuccessSnackBar(
                'Bem vindo ao Quadro Familiar 😁'
              );
            });
        })
      ),
    { dispatch: false }
  );

  public updateProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.UpdateProfile),
        tap(async action => {
          const profile = {
            displayName: action.payload.displayName,
          };
          return (await this.afAuth.currentUser)!.updateProfile(profile);
        })
      ),
    { dispatch: false }
  );

  public setNewUserData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.SetNewUserData),
        tap(async action => {
          const newUser = action.payload;

          const userRef: AngularFirestoreDocument<{ user: User }> =
            this.afs.doc(`users/${newUser.uid}`);
          this._store.dispatch(UpdateProfile({ payload: newUser }));
          this._store.dispatch(SetUserData({ payload: newUser }));

          return userRef.set({ user: newUser }, { merge: true });
        })
      ),
    { dispatch: false }
  );

  public forgotPassword$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.ForgotPassword),
        tap(async action => {
          this._store.dispatch(StartLoading());
          await this.afAuth
            .sendPasswordResetEmail(action.payload)
            .then(() => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openSuccessSnackBar(
                'Acesse o link enviado na sua caixa de e-mail'
              );
            })
            .catch(error => {
              this._store.dispatch(StopLoading());
              this._snackBarService.openFailureSnackBar(Messages[error.code]);
            });
        })
      ),
    { dispatch: false }
  );

  public logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.Logout),
        tap(async () => {
          this._store.dispatch(StopLoading());
          await this.afAuth.signOut();
          this.router.navigateByUrl('/');
          this._store.dispatch(StopLoading());
          this._snackBarService.openSuccessSnackBar('Volte Sempre 😁');
        })
      ),
    { dispatch: false }
  );

  public loadUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LoadUser),
        tap(() => {
          this.afAuth.authState.subscribe(user => {
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
                this._store.dispatch(loadBills({ payload: uid }));
              }
            }

            const isLogged = user !== null ? true : false;
            this._store.dispatch(UpdateIsLoggedStatus({ payload: isLogged }));
          });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    public readonly afs: AngularFirestore,
    public readonly afAuth: AngularFireAuth,
    public readonly router: Router,
    public readonly ngZone: NgZone,
    public readonly _authService: AuthenticationService,
    private readonly _store: Store<fromApp.AppState>,
    private readonly _snackBarService: SnackbarService
  ) {}
}
