import { AuthGuard } from '@authG/auth.guard';
import { NotFoundComponent } from '@sharedC/not-found/not-found.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        m => m.AuthenticationModule
      ),
  },
  {
    path: 'bills',
    loadChildren: () =>
      import('./features/bills/bills.module').then(m => m.BillsModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'plans',
    loadChildren: () =>
      import('./features/plans/plans.module').then(m => m.PlansModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./features/reports/reports.module').then(m => m.ReportsModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/tasks.module').then(m => m.TasksModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then(m => m.ProfileModule),
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
