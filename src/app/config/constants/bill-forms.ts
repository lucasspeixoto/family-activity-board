import { Validators } from '@angular/forms';

export const addEdditBillForm = {
  title: ['', [Validators.required, Validators.minLength(3)]],
  owner: [
    '',
    [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
  ],
  value: [0, [Validators.min(1)]],
  type: [0, [Validators.required]],
  spent: [1, [Validators.required]],
  date: [new Date(), [Validators.required]],
};

export const addTaskForm = {
  title: ['', [Validators.required, Validators.minLength(3)]],
  date: [new Date(), [Validators.required]],
};
