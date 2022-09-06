import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { AuthenticationService } from '@authS/authentication.service';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from '@authP/forgot-password/forgot-password.component';
import { LoginComponent } from '@authP/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';
import { SignupComponent } from '@authP/signup/signup.component';
import { SnackbarService } from '@sharedS/snackbar/snackbar.service';

const authRoutes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'remember-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(authRoutes)],
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AuthenticationLayoutComponent,
  ],
  providers: [AuthenticationService, SnackbarService],
})
export class AuthenticationModule {}
