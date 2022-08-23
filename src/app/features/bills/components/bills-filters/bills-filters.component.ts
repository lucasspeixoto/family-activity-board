/* eslint-disable no-console */

import * as fromApp from '@app/app.state';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  dateOptions,
  statusOptions,
  typeOptions,
} from '@constants/filters-selects';

import { Store } from '@ngrx/store';
import { filterBillsByType } from '@billsSt/bills.actions';

@Component({
  selector: 'app-bills-filters',
  templateUrl: './bills-filters.component.html',
  styleUrls: ['./bills-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsFiltersComponent {
  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public typeOptions = typeOptions;

  public dateOptions = dateOptions;

  public statusOptions = statusOptions;

  public changeTypeValue(selectedType: number) {
    this._store.dispatch(filterBillsByType({ value: selectedType }));
  }

  public changeDateValue(selectedDate: number) {
    console.log(selectedDate);
  }

  public changeStatusValue(selectedStatus: number) {
    console.log(selectedStatus);
  }
}
