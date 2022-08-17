import * as auth from 'firebase/auth';

import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Injectable, NgZone } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../models/authentication.model';
import { first } from 'rxjs/operators';

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
  // Sign in with email/password
  public async signIn(email: string, password: string): Promise<void> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        this.afAuth.authState.pipe(first()).subscribe(user => {
          if (user) {
            this.router.navigateByUrl('/bills');
          }
        });
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  public async signUp(
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user as User;
        const newUser = this.getNewUser(user, name);

        this.sendVerificationMail();
        this.setUserData(newUser);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  public async updateProfile(displayName: string) {
    const profile = {
      displayName: displayName,
    };
    return (await this.afAuth.currentUser)!.updateProfile(profile);
  }
  // Send email verfificaiton when new user sign up
  public sendVerificationMail(): Promise<void> {
    return this.afAuth.currentUser
      .then(user => user!.sendEmailVerification())
      .then(() => {
        this.router.navigate(['bills']);
      });
  }
  // Reset Forggot password
  public forgotPassword(passwordResetEmail: string): Promise<void> {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch(error => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign in with Google
  public googleAuth(): Promise<void> {
    return this.authLogin(new auth.GoogleAuthProvider()).then((result: any) => {
      console.log(result);
      this.router.navigate(['dashboard']);
    });
  }
  // Auth logic to run auth providers
  public authLogin(provider: any): Promise<void> {
    return this.afAuth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
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
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  public setUserData(newUser: User): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${newUser.uid}`
    );

    this.updateProfile(newUser.displayName!);

    return userRef.set(newUser, {
      merge: true,
    });
  }
  // Sign out
  public async signOut(): Promise<void> {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
