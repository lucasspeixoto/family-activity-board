import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationModule } from '@auth/authentication.module';
import { MaterialModule } from '@sharedM/material.module';
import { SharedModule } from '@sharedM/shared.module';

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  SharedModule,
  AuthenticationModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES, BrowserAnimationsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
