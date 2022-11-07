import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { addTaskForm } from '@constants/bill-forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  public addNewTaskForm = this._formBuilder.group({ ...addTaskForm });

  constructor(private readonly _formBuilder: FormBuilder) {}

  public addNewTaskHandler(): void {}
}
