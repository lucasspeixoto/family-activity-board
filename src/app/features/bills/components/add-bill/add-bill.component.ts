import * as fromApp from '@app/app.state';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { typeOptions } from '@constants/filters-selects';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss'],
})
export class AddBillComponent implements OnInit {
  public addNewBillForm!: FormGroup;

  public typeOptions = typeOptions;

  public ngOnInit(): void {
    this.buildForm();
  }

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  private buildForm(): void {
    this.addNewBillForm = this._formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      owner: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      value: [null, [Validators.required, Validators.min(1)]],
      type: [null, [Validators.required]],
      date: [null, [Validators.required]],
    });
  }

  public addNewBillHandler(): void {
    // eslint-disable-next-line no-console
    console.log(this.addNewBillForm.value);
  }
}
