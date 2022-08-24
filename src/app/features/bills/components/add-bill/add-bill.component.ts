import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { typeOptions } from '@constants/filters-selects';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss'],
})
export class AddBillComponent implements OnInit {
  constructor(private readonly _formBuilder: FormBuilder) {}

  public addNewBillForm!: FormGroup;

  public typeOptions = typeOptions;

  public ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.addNewBillForm = this._formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
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
