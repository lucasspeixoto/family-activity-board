import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpElevationDirective } from '@sharedD/up-elevation.directive';
import { CustomValidationMessageComponent } from '@sharedC/custom-validation-message/custom-validation-message.component';

import { HeaderComponent } from '@sharedC/header/header.component';
import { MainLayoutComponent } from '@sharedC/main-layout/main-layout.component';
import { SidebarComponent } from '@sharedC/sidebar/sidebar.component';
import { NotFoundComponent } from '@sharedC/not-found/not-found.component';
import { ObligationsPanelComponent } from '@app/obligations/components/obligations-panel/obligations-panel.component';
import { FooterComponent } from '@sharedC/footer/footer.component';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  FlexLayoutModule,
];

const COMPONENTS = [
  CustomValidationMessageComponent,
  MainLayoutComponent,
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  NotFoundComponent,
  ObligationsPanelComponent,
];

const DIRECTIVES = [UpElevationDirective];

@NgModule({
  declarations: [...DIRECTIVES, ...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES, ...DIRECTIVES, ...COMPONENTS],
})
export class SharedModule {}
