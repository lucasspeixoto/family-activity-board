/* eslint-disable no-console */
import * as fromApp from '@app/app.state';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '@authM/user.model';
import { Store } from '@ngrx/store';

import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { typeOptions } from '@constants/filters-selects';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss'],
})
export class AddBillComponent implements OnInit {
  public addNewBillForm!: FormGroup;

  public typeOptions = typeOptions;

  public billData!: AngularFirestoreDocument<any>;

  public ngOnInit(): void {
    this.buildForm();
  }

  constructor(
    private readonly _formBuilder: FormBuilder,
    public readonly afs: AngularFirestore,
    private readonly _store: Store<fromApp.AppState>,
    @Inject(MAT_DIALOG_DATA) public readonly user: User
  ) {
    //this._store.select(getUser).subscribe(user => console.log(user));
    this.afs
      .collection(`users/${this.user.uid}/bills`)
      .valueChanges()
      .pipe(take(1))
      .subscribe(bills => {
        console.log(bills);
      });
  }

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
    console.log(this.addNewBillForm.value);
    console.log(this.user);
    const url = `users/${this.user.uid}/bills`;

    /* this.billData = this.afs.doc(url);
    const newItem = [];
    newItem.push(this.addNewBillForm.value);
    const bill = { bills: newItem };
    this.billData.set(bill, { merge: true }); */

    this.afs.collection(url).add(this.addNewBillForm.value);
  }
}
