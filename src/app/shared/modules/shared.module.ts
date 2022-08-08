import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpElevationDirective } from '../directives/up-elevation.directive';
import { CustomValidationMessageComponent } from '../components/custom-validation-message/custom-validation-message.component';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  FlexLayoutModule,
];

const COMPONENTS = [CustomValidationMessageComponent];

const DIRECTIVES = [UpElevationDirective];

@NgModule({
  declarations: [...DIRECTIVES, ...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES, ...DIRECTIVES, ...COMPONENTS],
})
export class SharedModule {}
