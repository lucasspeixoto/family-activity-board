import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from '@authSt/auth.effects';
import { AuthenticationService } from '@authS/authentication.service';

import { BillsEffects } from '@billsSt/bills.effects';

import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';
import { LayoutComponent } from '@layout/layout.component';
import { MessagesComponent } from '@layout/header/messages/messages.component';
import { NotificationsComponent } from '@layout/header/notifications/notifications.component';
import { SidebarComponent } from '@layout/sidebar/sidebar.component';
import { UserComponent } from '@layout/header/user/user.component';

import { MaterialModule } from '@sharedM/material.module';
import { MessageEffects } from '@sharedSt/message/message.effects';
import { SharedModule } from '@sharedM/shared.module';
import { TasksEffects } from '@tasksSt/tasks.effects';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  SharedModule,
  MaterialModule,
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

const EFFECTS = [AuthEffects, BillsEffects, MessageEffects, TasksEffects];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, EffectsModule.forFeature([...EFFECTS])],
  exports: [...MODULES, ...COMPONENTS],
  providers: [AuthenticationService],
})
export class LayoutModule {}
