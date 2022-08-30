import { AddBillComponent } from '@billsC/add-bill/add-bill.component';
import { BillCardComponent } from '@billsC/bill-card/bill-card.component';
import { BillsCardsComponent } from '@billsC/bills-cards/bills-cards.component';
import { BillsComponent } from '@billsP/bills/bills.component';
import { BillsEffects } from './store/bills.effects';
import { BillsFiltersComponent } from '@billsC/bills-filters/bills-filters.component';
import { CommonModule } from '@angular/common';
import { DatePipe } from './pipes/date/date.pipe';
import { EditBillComponent } from '@billsC/edit-bill/edit-bill.component';
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
  BillsCardsComponent,
  BillCardComponent,
  AddBillComponent,
  EditBillComponent,
];

const PIPES = [TypeFilterPipe, SpentFilterPipe, DatePipe, PercentPipe];

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
})
export class BillsModule {}
