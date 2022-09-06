import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';

const profileRoutes = [{ path: '', component: ProfileComponent }];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild(profileRoutes),
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
