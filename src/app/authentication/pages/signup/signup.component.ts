import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      name: ['', [Validators.required, Validators.minLength(3)]],
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

  public handleSignup(): void {
    if (this.signupForm.invalid) return;

    const { name, email, password } = this.signupForm.value;

    this._authenticationService.signUp(name, email, password);
  }
}
