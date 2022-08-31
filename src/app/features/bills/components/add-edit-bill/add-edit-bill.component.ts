import * as fromApp from '@app/app.state';

import { Component, Inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { getUserUid } from '@app/authentication/store/auth.selectors';

import { addBillForm } from '@billsH/forms';
import { addBill, editBill } from '@billsSt/bills.actions';
import { spentOptions, typeOptions } from '@constants/filters-selects';
import { DateService } from '@sharedS/date/date.service';
import { tap } from 'rxjs';
import { getDateFromString } from '../../helpers/filters';
import { Bill } from '../../models/bills.model';

interface UpdateBillData {
  type: 'add' | 'edit';
  bill: Bill;
}

@Component({
  selector: 'app-add-edit-bill',
  templateUrl: './add-edit-bill.component.html',
  styleUrls: ['./add-edit-bill.component.scss'],
})
export class AddEditBillComponent implements OnInit {
  public addNewBillForm = this._formBuilder.group({ ...addBillForm });

  public readonly typeOptions = typeOptions;

  public readonly spentOptions = spentOptions;

  public userId!: string;

  public readonly userId$ = this._store
    .select(getUserUid)
    .pipe(tap(uid => (this.userId = uid!)));

  constructor(
    private readonly _formBuilder: NonNullableFormBuilder,
    private readonly _store: Store<fromApp.AppState>,
    private readonly _dateService: DateService,
    @Inject(MAT_DIALOG_DATA) public readonly data: UpdateBillData
  ) {}

  public ngOnInit(): void {
    const { bill, type } = this.data;
    if (type === 'edit') {
      this.setEditBillValues(bill);
    }
  }

  public setEditBillValues(bill: Bill): void {
    const { title, owner, value, type, spent, date } = bill;

    this.addNewBillForm.setValue({
      title,
      owner,
      value,
      type,
      spent,
      date: new Date(getDateFromString(date)),
    });
  }

  public updateBillHandler(): void {
    const { title, owner, value, type, date, spent } =
      this.addNewBillForm.value;

    const bill = {
      title: title!,
      owner: owner!,
      value: value!,
      type: type!,
      date: this._dateService.formatDate(new Date(date!)),
      spent: spent!,
    };

    if (this.data.type === 'add') {
      this.addNewBillHandler(bill);
    } else {
      this.editBillHandler(bill);
    }
  }

  public addNewBillHandler(bill: Bill): void {
    this._store.dispatch(
      addBill({
        url: `users/${this.userId}/bills`,
        bill: bill,
      })
    );
  }

  public editBillHandler(bill: Bill): void {
    const editedBillId = {
      ...bill,
      billId: this.data.bill?.billId,
    };
    this._store.dispatch(
      editBill({
        url: `users/${this.userId}/bills`,
        bill: { ...editedBillId },
      })
    );
  }
}
