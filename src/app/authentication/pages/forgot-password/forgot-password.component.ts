import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromApp from '@app/app.state';

import { ForgotPassword } from '@authSt/auth.actions';
import { forgotPasswordForm } from '@constants/auth-forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent {
  public hide = true;

  public forgotPasswordForm = this._formBuilder.group({
    ...forgotPasswordForm,
  });

  public readonly year = new Date().getFullYear();

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  public handleForgotPassword(): void {
    const { email } = this.forgotPasswordForm.value;
    this._store.dispatch(ForgotPassword({ payload: email! }));
  }
}
