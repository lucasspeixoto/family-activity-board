import { EventEmitter, Output } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ConfirmationData {
  title: string;
  subtitle: string;
  cancelButtonTitle: string;
  confirmationButtonTitle: string;
  data: unknown;
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  @Output()
  public confirmClicked = new EventEmitter<boolean>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: ConfirmationData
  ) {}

  public confirm(): void {
    this.confirmClicked.emit(true);
  }
}
