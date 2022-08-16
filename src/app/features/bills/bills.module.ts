import { BillsComponent } from '@billsP/bills/bills.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './../../layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';

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
