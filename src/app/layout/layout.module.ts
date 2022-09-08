import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthEffects } from '@app/authentication/store/auth.effects';
import { AuthenticationService } from '@authS/authentication.service';
import { BillsEffects } from '@app/features/bills/store/bills.effects';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';
import { LayoutComponent } from '@layout/layout.component';
import { MaterialModule } from '@sharedM/material.module';
import { MessageEffects } from '@app/shared/store/message/message.effects';
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
  imports: [
    ...MODULES,
    EffectsModule.forFeature([AuthEffects, BillsEffects, MessageEffects]),
  ],
  exports: [...MODULES, ...COMPONENTS],
  providers: [AuthenticationService],
})
export class LayoutModule {}
