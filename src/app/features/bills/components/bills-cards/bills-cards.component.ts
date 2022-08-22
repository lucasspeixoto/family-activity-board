import { Bill } from '@billsM/bills.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bills-cards',
  templateUrl: './bills-cards.component.html',
  styleUrls: ['./bills-cards.component.scss'],
})
export class BillsCardsComponent {
  public readonly bills: Bill[] = [
    {
      title: 'Conta de Água',
      type: 0,
      value: 66,
      date: '22/08/2022',
      owner: 'Lucas Peixoto',
      status: 2,
    },
    {
      title: 'Internet',
      type: 0,
      value: 126,
      date: '18/08/2022',
      owner: 'Lucas Peixoto',
      status: 1,
    },
    {
      title: 'Aluguel',
      type: 0,
      value: 1350,
      date: '05/08/2022',
      owner: 'Lucas Peixoto',
      status: 2,
    },
    {
      title: 'Cartão Itaú Lucas',
      type: 1,
      value: 760,
      date: '20/08/2022',
      owner: 'Lucas Peixoto',
      status: 2,
    },
    {
      title: 'Cartão Santander Lucas',
      type: 1,
      value: 460,
      date: '20/08/2022',
      owner: 'Lucas Peixoto',
      status: 2,
    },
    {
      title: 'Cartão Bradesco Liana',
      type: 1,
      value: 460,
      date: '17/08/2022',
      owner: 'Liana Fernandes',
      status: 2,
    },
    {
      title: 'Cartão Carrefour',
      type: 3,
      value: 460,
      date: '14/08/2022',
      owner: 'Liana Fernandes',
      status: 2,
    },
  ];
}
