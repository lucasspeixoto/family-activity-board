import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';
import { TasksComponent } from './pages/tasks/tasks.component';

const tasksRoutes = [{ path: '', component: TasksComponent }];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild(tasksRoutes),
  ],
  declarations: [TasksComponent],
})
export class TasksModule {}