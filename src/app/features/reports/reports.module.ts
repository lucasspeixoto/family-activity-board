import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { ReportsComponent } from './pages/reports/reports.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';

const reportsRoutes = [{ path: '', component: ReportsComponent }];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild(reportsRoutes),
  ],
  declarations: [ReportsComponent],
})
export class ReportsModule {}
