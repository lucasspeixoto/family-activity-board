import * as fromApp from '@app/app.state';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  rangeOptions,
  statusOptions,
  typeOptions,
} from '@constants/filters-selects';

import { Store } from '@ngrx/store';
import { setFilter } from '@billsSt/bills.actions';

@Component({
  selector: 'app-bills-filters',
  templateUrl: './bills-filters.component.html',
  styleUrls: ['./bills-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsFiltersComponent {
  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public typeOptions = typeOptions;

  public rangeOptions = rangeOptions;

  public statusOptions = statusOptions;

  public changeTypeValue(selectedType: number) {
    this._store.dispatch(setFilter({ filter: 'type', value: selectedType }));
  }

  public changeRangeValue(selectedRange: number) {
    this._store.dispatch(setFilter({ filter: 'range', value: selectedRange }));
  }

  public changeStatusValue(selectedStatus: number) {
    this._store.dispatch(
      setFilter({ filter: 'status', value: selectedStatus })
    );
  }
}
