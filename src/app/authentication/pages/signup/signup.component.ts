import * as fromApp from '@app/app.state';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Signup } from '@authSt/auth.actions';
import { signUpForm } from '@constants/auth-forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  public readonly title = 'Cadastro';
  public hide = true;

  public signupForm = this._formBuilder.group({ ...signUpForm });
  public readonly year = new Date().getFullYear();

  constructor(
    private _formBuilder: FormBuilder,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  public async handleSignup(): Promise<void> {
    const { name, email, password } = this.signupForm.value;

    const user = {
      name: name!,
      email: email!,
      password: password!,
    };

    this._store.dispatch(
      Signup({
        payload: user,
      })
    );
  }
}
