import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  public hide = true;

  public forgotPasswordForm!: FormGroup;

  public readonly year = new Date().getFullYear();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.forgotPasswordForm = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/),
        ],
      ],
    });
  }

  public handleForgotPassword(): void {
    console.log(this.forgotPasswordForm.value);
  }
}
