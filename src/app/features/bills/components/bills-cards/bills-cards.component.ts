import * as fromApp from '@app/app.state';

import { Bill } from '@billsMd/bills.model';
import { Component } from '@angular/core';
import { getDateFromString } from '@app/shared/helpers/date.helper';
import { getFilteredBills } from '@billsSt/bills.selectors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-bills-cards',
  templateUrl: './bills-cards.component.html',
  styleUrls: ['./bills-cards.component.scss'],
})
export class BillsCardsComponent {
  public filteredBills$: Observable<Bill[]> =
    this._store.select(getFilteredBills);

  constructor(private readonly _store: Store<fromApp.AppState>) {}
}
