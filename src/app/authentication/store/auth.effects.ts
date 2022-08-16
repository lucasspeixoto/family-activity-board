import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthActions } from './action-types';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signup),
        tap(action => {
          localStorage.setItem('user', JSON.stringify(action.user));
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router
  ) {}
}
