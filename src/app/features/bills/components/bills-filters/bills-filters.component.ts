import * as fromApp from '@app/app.state';

/* eslint-disable no-console */
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { filterBillsByType } from '../../store/bills.actions';

interface Select {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-bills-filters',
  templateUrl: './bills-filters.component.html',
  styleUrls: ['./bills-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsFiltersComponent {
  constructor(private readonly _store: Store<fromApp.AppState>) {}

  public typeOptions: Select[] = [
    { value: 1, viewValue: 'Contas (Ex: Energia, água, etc...' },
    { value: 2, viewValue: 'Cartão de Crédito' },
    { value: 3, viewValue: 'Faculdade' },
    { value: 4, viewValue: 'Cartão Supermercado' },
  ];

  public dateOptions: Select[] = [
    { value: 1, viewValue: 'Hoje' },
    { value: 2, viewValue: 'Semana Anterior' },
    { value: 3, viewValue: 'Semana Atual' },
    { value: 4, viewValue: 'Mês' },
    { value: 5, viewValue: 'Ano' },
  ];

  public statusOptions: Select[] = [
    { value: 1, viewValue: 'Atrasado' },
    { value: 2, viewValue: 'Vence Hoje' },
    { value: 3, viewValue: 'Em dia' },
  ];

  public changeTypeValue(selectedType: number) {
    console.log(selectedType);
    this._store.dispatch(filterBillsByType({ payload: selectedType }));
  }

  public changeDateValue(value: number) {
    console.log(value);
  }

  public changeStatusValue(value: number) {
    console.log(value);
  }
}
