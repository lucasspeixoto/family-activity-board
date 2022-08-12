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

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
