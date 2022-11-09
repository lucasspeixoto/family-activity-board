import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

import { ConfirmationComponent } from '@sharedC/confirmation/confirmation.component';
import { CustomValidationMessageComponent } from '@sharedC/custom-validation-message/custom-validation-message.component';
import { LoadingComponent } from '@sharedC/loading/loading.component';
import { NotFoundComponent } from '@sharedC/not-found/not-found.component';
import { ShortNamePipe } from '@sharedP/short-name.pipe';
import { UpElevationDirective } from '@sharedD/up-elevation.directive';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  MaterialModule,
];

const COMPONENTS = [
  CustomValidationMessageComponent,
  NotFoundComponent,
  LoadingComponent,
  ConfirmationComponent,
];

const DIRECTIVES = [UpElevationDirective];

const PIPES = [ShortNamePipe];

@NgModule({
  declarations: [...DIRECTIVES, ...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...DIRECTIVES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
