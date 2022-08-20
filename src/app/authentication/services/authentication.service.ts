import * as auth from 'firebase/auth';

import { Injectable, NgZone } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '@authM/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    public readonly afs: AngularFirestore,
    public readonly afAuth: AngularFireAuth,
    public readonly router: Router,
    public readonly ngZone: NgZone
  ) {}

  public isAuth() {
    return this.afAuth.authState.pipe(map(user => user != null));
  }

  public googleAuth(): Promise<void> {
    return this.authLogin(new auth.GoogleAuthProvider()).then(() => {
      this.router.navigate(['dashboard']);
    });
  }

  public authLogin(provider: any): Promise<void> {
    return this.afAuth
      .signInWithPopup(provider)
      .then(() => {
        this.router.navigate(['dashboard']);
        //this.setUserData(result.user);
      })
      .catch(error => {
        window.alert(error);
      });
  }

  public getNewUser(user: User, name: string): User {
    return {
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
      displayName: name,
      emailVerified: user.emailVerified,
    };
  }
}
