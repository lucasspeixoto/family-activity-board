import { Validators } from '@angular/forms';

export const addBillForm = {
  title: ['', [Validators.required, Validators.minLength(3)]],
  owner: [
    '',
    [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
  ],
  value: [null, [Validators.min(1)]],
  type: [null, [Validators.required]],
  spent: [null, [Validators.required]],
  date: [new Date(), [Validators.required]],
};
