import { BillsCardsComponent } from './components/bills-cards/bills-cards.component';
import { BillsComponent } from '@billsP/bills/bills.component';
import { BillsFiltersComponent } from './components/bills-filters/bills-filters.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';

const stickyRoutes = [{ path: '', component: BillsComponent }];

const COMPONENTS = [BillsComponent, BillsFiltersComponent, BillsCardsComponent];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild(stickyRoutes),
  ],
  declarations: [...COMPONENTS],
})
export class BillsModule {}
