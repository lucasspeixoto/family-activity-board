import * as fromApp from '@app/app.state';

import { addBill, editBill } from '@billsSt/bills.actions';

import { Bill } from '@billsM/bills.model';
import { DateService } from '@sharedS/date/date.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class BillService {
  constructor(
    private readonly _store: Store<fromApp.AppState>,
    private readonly _dateService: DateService
  ) {}

  public updateBill(
    bill: Partial<Bill>,
    updateType: string,
    userId: string,
    billId: string
  ): void {
    const { title, owner, value, type, date, spent } = bill;

    const updatedBill = {
      title: title!,
      owner: owner!,
      value: value!,
      type: type!,
      date: this._dateService.formatDate(new Date(date!)),
      spent: spent!,
    };

    if (updateType === 'add') {
      this.addNewBillHandler(updatedBill, userId);
    } else {
      this.editBillHandler(updatedBill, userId, billId);
    }
  }

  public addNewBillHandler(bill: Bill, userId: string): void {
    this._store.dispatch(
      addBill({
        url: `users/${userId}/bills`,
        bill: bill,
      })
    );
  }

  public editBillHandler(bill: Bill, userId: string, billId: string): void {
    const editedBillId = {
      ...bill,
      billId: billId,
    };
    this._store.dispatch(
      editBill({
        url: `users/${userId}/bills`,
        bill: { ...editedBillId },
      })
    );
  }
}
