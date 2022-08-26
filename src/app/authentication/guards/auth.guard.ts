/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { first, tap } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthenticationService
  ) {}
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuth().pipe(
      tap(user => {
        if (!user) {
          this.router.navigateByUrl('/');
        }
      }),
      first()
    );
  }
  public canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuth().pipe(
      tap(user => {
        if (!user) {
          this.router.navigateByUrl('/');
        }
      }),
      first()
    );
  }
}
