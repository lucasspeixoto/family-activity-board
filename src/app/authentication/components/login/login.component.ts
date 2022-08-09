import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide = true;

  public loginForm!: FormGroup;

  public readonly year = new Date().getFullYear();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public handleLogin(): void {
    if (this.loginForm.invalid) return;
    console.log(this.loginForm.value);
  }
}
