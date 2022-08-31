import { Validators } from '@angular/forms';

export const addBillForm = {
  title: ['', [Validators.required, Validators.minLength(3)]],
  owner: [
    '',
    [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
  ],
  value: [0, [Validators.min(1)]],
  type: [1, [Validators.required]],
  spent: [1, [Validators.required]],
  date: [new Date(), [Validators.required]],
};
