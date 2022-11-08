import { Validators } from '@angular/forms';

const emailValidators = [
  Validators.required,
  Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/),
];

export const loginForm = {
  email: ['lukeskywalker@email.com', [...emailValidators]],
  password: ['123456', [Validators.required, Validators.minLength(3)]],
};

export const signUpForm = {
  name: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [...emailValidators]],
  password: ['', [Validators.required, Validators.minLength(6)]],
};

export const forgotPasswordForm = {
  email: ['', [...emailValidators]],
};
