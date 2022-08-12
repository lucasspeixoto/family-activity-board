import { LayoutModule } from './../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@sharedM/material.module';
import { SharedModule } from '@sharedM/shared.module';
import { RouterModule } from '@angular/router';
import { BillsComponent } from '@billsP/bills/bills.component';

const stickyRoutes = [{ path: '', component: BillsComponent }];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild(stickyRoutes),
  ],
  declarations: [BillsComponent],
})
export class BillsModule {}
