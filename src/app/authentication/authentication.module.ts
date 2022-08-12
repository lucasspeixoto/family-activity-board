import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '@authP/login/login.component';
import { SharedModule } from '@sharedM/shared.module';
import { SignupComponent } from '@authP/signup/signup.component';
import { ForgotPasswordComponent } from '@authP/forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';

const authRoutes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: SignupComponent },
  { path: 'lembrar-senha', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(authRoutes)],
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AuthenticationLayoutComponent,
  ],
})
export class AuthenticationModule {}
