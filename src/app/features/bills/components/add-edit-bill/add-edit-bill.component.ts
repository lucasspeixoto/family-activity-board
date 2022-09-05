import * as fromApp from '@app/app.state';

import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { getUserUid } from '@authSt/auth.selectors';

import { spentOptions, typeOptions } from '@constants/filters-selects';

import { Bill } from '@billsMd/bills.model';
import { UpdateBillData } from '@billsMd/update-bill.model';
import { BillService } from '@billsS/bill.service';
import { addEdditBillForm } from '@constants/bill-forms';
import { getDateFromString } from '@sharedH/date.helper';
import { tap } from 'rxjs';

@Component({
  selector: 'app-add-edit-bill',
  templateUrl: './add-edit-bill.component.html',
  styleUrls: ['./add-edit-bill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditBillComponent implements OnInit {
  public addNewBillForm = this._formBuilder.group({ ...addEdditBillForm });

  public readonly typeOptions = typeOptions;

  public readonly spentOptions = spentOptions;

  public userId!: string;

  public readonly userId$ = this._store
    .select(getUserUid)
    .pipe(tap(uid => (this.userId = uid!)));

  constructor(
    private readonly _formBuilder: NonNullableFormBuilder,
    private readonly _store: Store<fromApp.AppState>,
    private readonly _billService: BillService,
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
      title: title!,
      owner,
      value,
      type,
      spent,
      date: new Date(getDateFromString(date)),
    });
  }

  public updateBillHandler(): void {
    this._billService.updateBill(
      this.addNewBillForm.value,
      this.data.type,
      this.userId,
      this.data.bill?.billId!
    );
  }
}
