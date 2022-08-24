import { AddBillComponent } from '@billsC/add-bill/add-bill.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent {
  constructor(public readonly dialog: MatDialog) {}

  public addNewBillHandler(): void {
    this.dialog.open(AddBillComponent, {
      width: '40%',
    });
  }
}
