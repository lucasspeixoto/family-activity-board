import * as fromApp from '@app/app.state';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ForgotPassword } from '@authSt/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  public hide = true;

  public forgotPasswordForm!: FormGroup;

  public readonly year = new Date().getFullYear();

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.forgotPasswordForm = this._formBuilder.group({
      email: [
        'lspeixotodev@gmail.com',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/),
        ],
      ],
    });
  }

  public handleForgotPassword(): void {
    if (!this.forgotPasswordForm.valid) {
      return;
    }
    const { email } = this.forgotPasswordForm.value;
    this._store.dispatch(ForgotPassword({ payload: email }));
  }
}
