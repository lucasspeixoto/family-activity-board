import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss'],
})
export class AddBillComponent implements OnInit {
  constructor(private readonly _formBuilder: FormBuilder) {}

  public addNewBillForm!: FormGroup;

  public ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.addNewBillForm = this._formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
}
