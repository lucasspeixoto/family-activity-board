import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { MaterialModule } from '@sharedM/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@sharedM/shared.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { PostItComponent } from './components/post-it/post-it.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './store/tasks.effects';
import { TaskService } from './services/task.service';

const tasksRoutes = [
  {
    path: '',
    component: TasksComponent,
  },
];

const COMPONENTS = [TasksComponent, PostItComponent, AddTaskComponent];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    LayoutModule,
    RouterModule.forChild(tasksRoutes),
    EffectsModule.forFeature([TasksEffects]),
  ],
  declarations: [...COMPONENTS],
  providers: [TaskService],
})
export class TasksModule {}
