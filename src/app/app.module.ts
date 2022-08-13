import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationModule } from '@auth/authentication.module';
import { MaterialModule } from '@sharedM/material.module';
import { SharedModule } from '@sharedM/shared.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';

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
  provideAnalytics(() => getAnalytics()),
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideFirestore(() => getFirestore()),
  provideAuth(() => getAuth()),
  provideStorage(() => getStorage()),
];

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES, ...FIREBASE],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
