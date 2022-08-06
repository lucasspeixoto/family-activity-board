import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@authC/login/login.component';

const authenticationRoutes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(authenticationRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
