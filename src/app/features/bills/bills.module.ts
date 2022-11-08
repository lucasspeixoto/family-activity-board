import { AddEditBillComponent } from './components/add-edit-bill/add-edit-bill.component';
import { BillCardComponent } from '@billsC/bill-card/bill-card.component';
import { BillsComponent } from '@billsP/bills/bills.component';
import { BillsEffects } from './store/bills.effects';
import { BillService } from './services/bill.service';
import { BillsFiltersComponent } from '@billsC/bills-filters/bills-filters.component';
import { CommonModule } from '@angular/common';
import { DateOrderFilterPipe } from './pipes/date-order-filter/date-order-filter.pipe';
import { DatePipe } from './pipes/date/date.pipe';
import { EffectsModule } from '@ngrx/effects';
import { LayoutModule } from '@layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { PercentPipe } from './pipes/percent/percent.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';
import { SpentFilterPipe } from './pipes/spent-filter/spent-filter.pipe';
import { TypeFilterPipe } from './pipes/type-filter/type-filter.pipe';

const billsRoutes = [{ path: '', component: BillsComponent }];

const COMPONENTS = [
  BillsComponent,
  BillsFiltersComponent,
  BillCardComponent,
  AddEditBillComponent,
];

const PIPES = [
  TypeFilterPipe,
  SpentFilterPipe,
  DatePipe,
  PercentPipe,
  DateOrderFilterPipe,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild(billsRoutes),
    EffectsModule.forFeature([BillsEffects]),
  ],
  declarations: [...COMPONENTS, ...PIPES],
  providers: [BillService],
})
export class BillsModule {}
