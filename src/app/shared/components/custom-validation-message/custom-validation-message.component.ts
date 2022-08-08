import { Component, Input, Optional } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-validation-message',
  templateUrl: './custom-validation-message.component.html',
  styles: [
    `
      li {
        list-style: none;
      }
    `,
  ],
})
export class CustomValidationMessageComponent {
  @Input()
  public controlName!: string;

  @Input()
  public minLength?: number;

  @Input()
  public maxLength?: number;

  constructor(@Optional() private _controlContainer: ControlContainer) {}

  get form(): FormGroup {
    return this._controlContainer.control as FormGroup;
  }

  get control(): FormControl {
    return this.form.get(this.controlName) as FormControl;
  }
}
