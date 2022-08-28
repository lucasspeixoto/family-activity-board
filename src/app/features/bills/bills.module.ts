import { AddBillComponent } from './components/add-bill/add-bill.component';
import { BillCardComponent } from './components/bill-card/bill-card.component';
import { BillsCardsComponent } from './components/bills-cards/bills-cards.component';
import { BillsComponent } from '@billsP/bills/bills.component';
import { BillsEffects } from './store/bills.effects';
import { BillsFiltersComponent } from './components/bills-filters/bills-filters.component';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LayoutModule } from '@layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';
import { SpentFilterPipe } from './pipes/spent-filter/spent-filter.pipe';
import { TypeFilterPipe } from './pipes/type-filter/type-filter.pipe';

const stickyRoutes = [{ path: '', component: BillsComponent }];

const COMPONENTS = [
  BillsComponent,
  BillsFiltersComponent,
  BillsCardsComponent,
  BillCardComponent,
  AddBillComponent,
];

const PIPES = [TypeFilterPipe, SpentFilterPipe];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild(stickyRoutes),
    EffectsModule.forFeature([BillsEffects]),
  ],
  declarations: [...COMPONENTS, ...PIPES],
})
export class BillsModule {}
