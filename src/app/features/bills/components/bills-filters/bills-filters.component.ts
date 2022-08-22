import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  public typeOptions: Select[] = [
    { value: 0, viewValue: 'Contas (Ex: Energia, água, etc...' },
    { value: 1, viewValue: 'Cartão de Crédito' },
    { value: 2, viewValue: 'Faculdade' },
    { value: 3, viewValue: 'Cartão Supermercado' },
  ];

  public dateOptions: Select[] = [
    { value: 0, viewValue: 'Hoje' },
    { value: 1, viewValue: 'Semana Anterior' },
    { value: 2, viewValue: 'Semana Atual' },
    { value: 3, viewValue: 'Mês' },
    { value: 4, viewValue: 'Ano' },
  ];

  public statusOptions: Select[] = [
    { value: 0, viewValue: 'Atrasado' },
    { value: 1, viewValue: 'Pendente' },
    { value: 2, viewValue: 'Pago' },
  ];
}
