import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';

import { setFilter } from '@billsSt/bills.actions';

import {
  rangeOptions,
  spentOptions,
  statusOptions,
  typeOptions,
} from '@constants/filters-selects';

@Component({
  selector: 'app-bills-filters',
  templateUrl: './bills-filters.component.html',
  styleUrls: ['./bills-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsFiltersComponent {
  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public readonly typeOptions = typeOptions;

  public readonly rangeOptions = rangeOptions;

  public readonly statusOptions = statusOptions;

  public readonly spentOptions = spentOptions;

  public changeTypeValue(selectedType: number): void {
    this._store.dispatch(setFilter({ filter: 'type', value: selectedType }));
  }

  public changeRangeValue(selectedRange: number): void {
    this._store.dispatch(setFilter({ filter: 'range', value: selectedRange }));
  }

  public changeStatusValue(selectedStatus: number): void {
    this._store.dispatch(
      setFilter({ filter: 'status', value: selectedStatus })
    );
  }

  public changeSpentValue(selectedSpent: number): void {
    this._store.dispatch(setFilter({ filter: 'spent', value: selectedSpent }));
  }
}
