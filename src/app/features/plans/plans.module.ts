import { CommonModule } from '@angular/common';
import { LayoutModule } from './../../layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { PlansComponent } from '@plansP/plans/plans.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';

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
