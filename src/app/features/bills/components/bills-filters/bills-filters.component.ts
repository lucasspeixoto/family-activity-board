import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bills-filters',
  templateUrl: './bills-filters.component.html',
  styleUrls: ['./bills-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillsFiltersComponent {
  public periods: string[] = ['Hoje', 'Semana Anterior', 'Semana Atual', 'Mês'];

  public situations: string[] = ['Pago', 'Pendente'];

  public types: string[] = ['Fixo', 'Variável'];
}
