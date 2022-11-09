import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private readonly snackBar: MatSnackBar) {}

  /**
   * @description
   * A partir de uma mensagem de texto para um
   * caso de sucesso, dispara o snackBar do material
   * com a mensagem passada
   * @name openSuccessSnackBar
   * @param {string} message
   * @access public
   * @return {void}
   */
  public openSuccessSnackBar(message: string): void {
    this.snackBar.open(message, 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['green-snackbar'],
    });
  }

  /**
   * @description
   * A partir de uma mensagem de texto para um
   * caso de erro, dispara o snackBar do material
   * com a mensagem passada
   * @name openFailureSnackBar
   * @param {string} message
   * @access public
   * @return {void}
   */
  public openFailureSnackBar(message: string): void {
    this.snackBar.open(message, 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['red-snackbar'],
    });
  }
}
