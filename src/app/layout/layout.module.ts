import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationService } from '@authS/authentication.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';
import { LayoutComponent } from '@layout/layout.component';
import { MaterialModule } from '@sharedM/material.module';
import { MessagesComponent } from '@layout/header/messages/messages.component';
import { NgModule } from '@angular/core';
import { NotificationsComponent } from '@layout/header/notifications/notifications.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';
import { SidebarComponent } from '@layout/sidebar/sidebar.component';
import { UserComponent } from '@layout/header/user/user.component';

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
