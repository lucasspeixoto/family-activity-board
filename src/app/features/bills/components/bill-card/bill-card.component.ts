import { Component, Input } from '@angular/core';

import { Bill } from '@app/features/bills/models/bills.model';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
})
export class BillCardComponent {
  @Input()
  public bill!: Bill;

  constructor() {}
}
