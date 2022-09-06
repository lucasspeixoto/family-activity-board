import { Validators } from '@angular/forms';

export const loginForm = {
  email: [
    'user@email.com',
    [
      Validators.required,
      Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/),
    ],
  ],
  password: ['123456', [Validators.required, Validators.minLength(3)]],
};

export const signUpForm = {
  name: ['', [Validators.required, Validators.minLength(3)]],
  email: [
    '',
    [
      Validators.required,
      Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/),
    ],
  ],
  password: ['', [Validators.required, Validators.minLength(6)]],
};

export const forgotPasswordForm = {
  email: [
    '',
    [
      Validators.required,
      Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/),
    ],
  ],
};
