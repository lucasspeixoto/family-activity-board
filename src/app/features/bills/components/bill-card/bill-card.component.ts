import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
})
export class BillCardComponent {
  @Input()
  public title!: string;

  constructor() {}
}
