import * as fromApp from '@app/app.state';

import { addBill, deleteBill, editBill } from '@billsSt/bills.actions';

import { Bill } from '@billsMd/bills.model';
import { DateService } from '@sharedS/date/date.service';
import { getNextMonthDateFromString } from '@sharedH/date.helper';
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

  private addNewBillHandler(bill: Bill, userId: string): void {
    this._store.dispatch(
      addBill({
        url: `users/${userId}/bills`,
        bill: bill,
      })
    );
  }

  private editBillHandler(bill: Bill, userId: string, billId: string): void {
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

  public deleteBillHandler(userId: string, billId: string): void {
    this._store.dispatch(
      deleteBill({
        url: `users/${userId}/bills`,
        billId: billId!,
      })
    );
  }

  public handleMarkAsPaid(bill: Bill, userId: string): void {
    const { spent } = bill; // 1 - Fixo | 2 - Variável

    if (spent === 1) {
      const updatedDate = this._dateService.formatDate(
        new Date(getNextMonthDateFromString(bill.date))
      );
      const newBill = {
        ...bill,
        date: updatedDate,
      };
      this._store.dispatch(
        editBill({
          url: `users/${userId}/bills`,
          bill: { ...newBill },
        })
      );
    } else if (spent === 2) {
      this._store.dispatch(
        deleteBill({
          url: `users/${userId}/bills`,
          billId: bill.billId!,
        })
      );
    }
  }
}
