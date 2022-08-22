import { BillCardComponent } from './components/bill-card/bill-card.component';
import { BillsCardsComponent } from './components/bills-cards/bills-cards.component';
import { BillsComponent } from '@billsP/bills/bills.component';
import { BillsFiltersComponent } from './components/bills-filters/bills-filters.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';
import { StatusFilterPipe } from './pipes/status-filter/status-filter.pipe';
import { TypeFilterPipe } from './pipes/type-filter/type-filter.pipe';

const stickyRoutes = [{ path: '', component: BillsComponent }];

const COMPONENTS = [
  BillsComponent,
  BillsFiltersComponent,
  BillsCardsComponent,
  BillCardComponent,
];

const PIPES = [StatusFilterPipe, TypeFilterPipe];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild(stickyRoutes),
  ],
  declarations: [...COMPONENTS, ...PIPES],
})
export class BillsModule {}
