import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '@authC/login/login.component';
import { SharedModule } from '@app/shared/modules/shared.module';
import { UpElevationDirective } from '@app/shared/directives/up-elevation.directive';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [LoginComponent],
})
export class AuthenticationModule {}
