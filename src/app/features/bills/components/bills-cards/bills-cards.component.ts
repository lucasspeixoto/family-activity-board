import * as fromApp from '@app/app.state';

import { Bill } from '@billsM/bills.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getBills } from '../../store/bills.selectors';

@Component({
  selector: 'app-bills-cards',
  templateUrl: './bills-cards.component.html',
  styleUrls: ['./bills-cards.component.scss'],
})
export class BillsCardsComponent {
  public readonly bills$: Observable<Bill[]> = this._store.select(getBills);

  constructor(private readonly _store: Store<fromApp.AppState>) {}
}
