import * as fromApp from '@app/app.state';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  rangeOptions,
  spentOptions,
  statusOptions,
  typeOptions,
} from '@constants/filters-selects';

import { setFilter } from '@billsSt/bills.actions';
import { Store } from '@ngrx/store';

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

  public changeSpentValue(selectedSpent: number) {
    this._store.dispatch(setFilter({ filter: 'spent', value: selectedSpent }));
  }
}
