import { Component, Input, OnInit } from '@angular/core';

import { Bill } from '@billsM/bills.model';
import { getDateStatus } from '@billsH/filters';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
})
export class BillCardComponent implements OnInit {
  public readonly billTypeIcons: Record<number, string> = {
    1: 'account_balance',
    2: 'credit_card',
    3: 'school',
    4: 'fastfood',
  };

  @Input()
  public bill!: Bill;

  public dateStatus!: number;

  public ngOnInit(): void {
    this.dateStatus = getDateStatus(this.bill.date);
  }
}
