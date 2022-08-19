import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  public periods: string[] = ['Hoje', 'Semana Anterior', 'Semana Atual', 'Mês'];

  public situations: string[] = ['Pago', 'Pendente'];

  public types: string[] = ['Fixo', 'Variável'];

  constructor() {}

  public ngOnInit(): void {
    console.log('Contas');
  }
}
