import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromApp from '@app/app.state';

import { clearBillData, loadBills } from '@billsSt/bills.actions';

import { AuthenticationService } from '@authS/authentication.service';
import { User } from '@authMd/user.model';

import { StartLoading, StopLoading } from '@sharedSt/loading/loading.actions';
import { Messages } from '@shared/messages/firebase';
import { SnackbarService } from '@sharedS/snackbar/snackbar.service';

import { loadTasks } from '@tasksSt/tasks.actions';

import {
  SendEmailVerification,
  SetNewUserData,
  SetUserData,
  UpdateIsLoggedStatus,
  UpdateProfile,
} from './auth.actions';

import { AuthActions } from './action-types';

@Injectable()
export class AuthEffects {
  public login$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.Login),
        tap(async action => {
          this._store.dispatch(StartLoading());
          const { email, password } = action.payload;
          await this._angularFireAuth
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
                this._router.navigateByUrl('/tasks');
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
      this._actions$.pipe(
        ofType(AuthActions.Signup),
        tap(action => {
          this._store.dispatch(StartLoading());
          const { name, email, password } = action.payload;
          this._angularFireAuth
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
      this._actions$.pipe(
        ofType(AuthActions.SendEmailVerification),
        tap(() => {
          this._angularFireAuth.currentUser
            .then(user => user!.sendEmailVerification())
            .then(() => {
              this._router.navigateByUrl('/tasks');
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
      this._actions$.pipe(
        ofType(AuthActions.UpdateProfile),
        tap(async action => {
          const profile = {
            displayName: action.payload.displayName,
          };
          return (await this._angularFireAuth.currentUser)!.updateProfile(
            profile
          );
        })
      ),
    { dispatch: false }
  );

  public setNewUserData$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.SetNewUserData),
        tap(async action => {
          const newUser = action.payload;

          const userRef: AngularFirestoreDocument<{ user: User }> =
            this._angularFirestore.doc(`users/${newUser.uid}`);
          this._store.dispatch(UpdateProfile({ payload: newUser }));
          this._store.dispatch(SetUserData({ payload: newUser }));

          return userRef.set({ user: newUser }, { merge: true });
        })
      ),
    { dispatch: false }
  );

  public forgotPassword$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.ForgotPassword),
        tap(async action => {
          this._store.dispatch(StartLoading());
          await this._angularFireAuth
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
      this._actions$.pipe(
        ofType(AuthActions.Logout),
        tap(async () => {
          this._store.dispatch(StartLoading());
          await this._angularFireAuth.signOut().then(() => {
            this._router.navigateByUrl('/');
            this._store.dispatch(StopLoading());
            this._snackBarService.openSuccessSnackBar('Volte Sempre 😁');
            this._store.dispatch(clearBillData());
          });
        })
      ),
    { dispatch: false }
  );

  public loadUser$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.LoadUser),
        tap(() => {
          this._angularFireAuth.authState.subscribe(user => {
            if (user) {
              const { email, photoURL, uid, displayName, emailVerified } =
                user as User;

              const loggedUser = {
                email,
                photoURL,
                uid,
                displayName,
                emailVerified,
              };
              this._store.dispatch(SetUserData({ payload: loggedUser }));
              this._store.dispatch(loadBills({ payload: uid }));
              this._store.dispatch(loadTasks({ payload: uid }));
            }

            const isLogged = user !== null ? true : false;
            this._store.dispatch(UpdateIsLoggedStatus({ payload: isLogged }));
          });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly _actions$: Actions,
    public readonly _angularFirestore: AngularFirestore,
    public readonly _angularFireAuth: AngularFireAuth,
    public readonly _router: Router,
    public readonly _authService: AuthenticationService,
    private readonly _store: Store<fromApp.AppState>,
    private readonly _snackBarService: SnackbarService
  ) {}
}
