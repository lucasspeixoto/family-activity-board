import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private readonly snackBar: MatSnackBar) {}

  public openSuccessSnackBar(message: string): void {
    this.snackBar.open(message, 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['green-snackbar'],
    });
  }

  public openFailureSnackBar(message: any): void {
    this.snackBar.open(message, 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['red-snackbar'],
    });
  }
}
