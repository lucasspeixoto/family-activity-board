import 'moment/locale/pt';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { MatDialogRef } from '@angular/material/dialog';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './app.state';

import { AuthenticationModule } from '@auth/authentication.module';

import { environment } from '@envs/environment';

import { LayoutModule } from '@layout/layout.module';

import { MaterialModule } from '@sharedM/material.module';
import { SharedModule } from '@sharedM/shared.module';

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
  EffectsModule.forRoot([]),
];

const PROVIDERS = [
  ScreenTrackingService,
  UserTrackingService,
  { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  },
  { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  {
    provide: MatDialogRef,
    useValue: {},
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES, ...FIREBASE, ...STORE],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
