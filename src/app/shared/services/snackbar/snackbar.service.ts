import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private readonly snackBar: MatSnackBar) {}

  openSuccessSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['green-snackbar'],
    });
  }

  openFailureSnackBar(message: any) {
    this.snackBar.open(message, 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['red-snackbar'],
    });
  }
}
