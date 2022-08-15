import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from '@layout/header/header.component';
import { SidebarComponent } from '@layout/sidebar/sidebar.component';
import { LayoutComponent } from '@layout/layout.component';
import { NotificationsComponent } from '@layout/header/notifications/notifications.component';
import { UserComponent } from '@layout/header/user/user.component';
import { MessagesComponent } from '@layout/header/messages/messages.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { MaterialModule } from '@sharedM/material.module';
import { SharedModule } from '@sharedM/shared.module';
import { AuthenticationService } from '@authS/authentication.service';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  SharedModule,
  MaterialModule,
  FlexLayoutModule,
];

const COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  NotificationsComponent,
  UserComponent,
  MessagesComponent,
  SidebarComponent,
  FooterComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
  providers: [AuthenticationService],
})
export class LayoutModule {}
