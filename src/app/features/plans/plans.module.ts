import { LayoutModule } from './../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from '@plansP/plans/plans.component';
import { MaterialModule } from '@sharedM/material.module';
import { SharedModule } from '@sharedM/shared.module';
import { RouterModule } from '@angular/router';

const plansRoutes = [{ path: '', component: PlansComponent }];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild(plansRoutes),
  ],
  declarations: [PlansComponent],
})
export class PlansModule {}
