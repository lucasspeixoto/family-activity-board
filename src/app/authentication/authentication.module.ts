import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '@authC/login/login.component';
import { SharedModule } from '@app/shared/modules/shared.module';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { AuthenticationLayoutComponent } from './components/authentication-layout/authentication-layout.component';

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
