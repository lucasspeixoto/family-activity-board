import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '@authS/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public readonly title = 'Cadastro';
  public hide = true;

  public signupForm!: FormGroup;

  public readonly year = new Date().getFullYear();

  constructor(
    private _formBuilder: FormBuilder,
    private readonly _authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.signupForm = this._formBuilder.group({
      name: ['Dart Vader', [Validators.required, Validators.minLength(3)]],
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

  public async handleSignup(): Promise<void> {
    if (this.signupForm.invalid) return;

    const { name, email, password } = this.signupForm.value;

    this._authenticationService.signUp(name, email, password).then(() => {
      this._authenticationService.updateProfile(name);
    });
  }
}
