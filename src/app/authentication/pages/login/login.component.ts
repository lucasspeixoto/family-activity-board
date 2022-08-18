import * as fromApp from '@app/app.state';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Login } from '@app/authentication/store/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide = true;

  public loginForm!: FormGroup;

  public readonly year = new Date().getFullYear();

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this._formBuilder.group({
      email: [
        'lspeixotodev@gmail.com',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/),
        ],
      ],
      password: ['30101991', [Validators.required, Validators.minLength(3)]],
    });
  }

  public handleLogin(): void {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    const user = {
      email,
      password,
    };

    this._store.dispatch(Login({ payload: user }));
  }
}
