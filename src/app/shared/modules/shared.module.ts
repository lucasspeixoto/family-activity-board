import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CustomValidationMessageComponent } from '@sharedC/custom-validation-message/custom-validation-message.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingComponent } from '../components/loading/loading.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from '@sharedC/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ShortNamePipe } from '@sharedP/short-name.pipe';
import { UpElevationDirective } from '@sharedD/up-elevation.directive';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  MaterialModule,
  FlexLayoutModule,
];

const COMPONENTS = [
  CustomValidationMessageComponent,
  NotFoundComponent,
  LoadingComponent,
];

const DIRECTIVES = [UpElevationDirective];

const PIPES = [ShortNamePipe];

@NgModule({
  declarations: [...DIRECTIVES, ...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...DIRECTIVES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
