import * as fromApp from '@app/app.state';

import { Component, Inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '@authM/user.model';
import { Store } from '@ngrx/store';

import { getUserUid } from '@app/authentication/store/auth.selectors';

import { spentOptions, typeOptions } from '@constants/filters-selects';
import { tap } from 'rxjs';
import { addBill } from '@billsSt/bills.actions';
import { DateService } from '@sharedS/date/date.service';
import { addBillForm } from '@billsH/forms';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss'],
})
export class AddBillComponent {
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
    @Inject(MAT_DIALOG_DATA) public readonly user: User
  ) {}

  public addNewBillHandler(): void {
    const { title, owner, value, type, date, spent } =
      this.addNewBillForm.value;

    const newBill = {
      title: title!,
      owner: owner!,
      value: value!,
      type: type!,
      date: this._dateService.formatDate(date!),
      spent: spent!,
    };
    this._store.dispatch(
      addBill({
        url: `users/${this.userId}/bills`,
        bill: { ...newBill },
      })
    );
  }
}
