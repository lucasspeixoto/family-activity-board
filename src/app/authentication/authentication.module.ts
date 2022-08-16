import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { AuthenticationService } from './services/authentication.service';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from '@authP/forgot-password/forgot-password.component';
import { LoginComponent } from '@authP/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';
import { SignupComponent } from '@authP/signup/signup.component';

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
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
