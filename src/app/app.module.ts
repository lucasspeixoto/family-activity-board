import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthEffects } from './authentication/store/auth.effects';
import { AuthenticationModule } from '@auth/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { environment } from './../environments/environment';
import { reducers } from './app.state';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  RouterModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  SharedModule,
  LayoutModule,
  AuthenticationModule,
];

const FIREBASE = [
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
  AngularFirestoreModule,
  AngularFireStorageModule,
  AngularFireDatabaseModule,
];

const STORE = [
  StoreModule.forRoot(reducers, {
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
      strictStateSerializability: true,
      strictActionSerializability: true,
    },
  }),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),
  EffectsModule.forRoot([AuthEffects]),
];

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES, ...FIREBASE, ...STORE],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
