/* eslint-disable no-console */
import * as fromApp from '@app/app.state';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '@authM/user.model';
import { Store } from '@ngrx/store';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getUserUid } from '@app/authentication/store/auth.selectors';
import { typeOptions } from '@constants/filters-selects';
import { tap } from 'rxjs';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss'],
})
export class AddBillComponent implements OnInit {
  public addNewBillForm!: FormGroup;

  public typeOptions = typeOptions;

  public userId!: string | null | undefined;

  public userId$ = this._store
    .select(getUserUid)
    .pipe(tap(uid => (this.userId = uid)));

  public ngOnInit(): void {
    this.buildForm();
  }

  constructor(
    private readonly _formBuilder: FormBuilder,
    public readonly afs: AngularFirestore,
    private readonly _store: Store<fromApp.AppState>,
    @Inject(MAT_DIALOG_DATA) public readonly user: User
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
    const url = `users/${this.userId}/bills`;

    this.afs.collection(url).add(this.addNewBillForm.value);
  }
}
