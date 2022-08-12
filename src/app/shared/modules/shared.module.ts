import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { UpElevationDirective } from '@sharedD/up-elevation.directive';
import { CustomValidationMessageComponent } from '@sharedC/custom-validation-message/custom-validation-message.component';

import { NotFoundComponent } from '@sharedC/not-found/not-found.component';

import { ShortNamePipe } from '@sharedP/short-name.pipe';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  MaterialModule,
  FlexLayoutModule,
];

const COMPONENTS = [CustomValidationMessageComponent, NotFoundComponent];

const DIRECTIVES = [UpElevationDirective];

const PIPES = [ShortNamePipe];

@NgModule({
  declarations: [...DIRECTIVES, ...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...DIRECTIVES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
